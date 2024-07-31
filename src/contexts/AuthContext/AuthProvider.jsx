/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import config from "../../config";
import { toast } from "sonner";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // states for holding user info
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filterObject, setFilterObject] = useState({});
  const [refetchUserDB, setRefetchUserDB] = useState(false);

  const createUserWithEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const update = (name) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // getting and setting the user from firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return () => unsubscribe();
    };
  }, []);

  // saving the user info if the user is logging in for the first time
  useEffect(() => {}, [user, user?.email]);

  // Getting the user from mongodb database
  useEffect(() => {
    if (user?.email) {
      setIsLoading(true);
      fetch(`${config.base_url}/users/single/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserDB(data?.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err?.message || "authentication failed");
        });
    }
  }, [user, user?.email, refetchUserDB]);

  const authInfo = {
    user,
    userDB,
    isLoading,
    createUserWithEmail,
    logInWithEmail,
    logInWithGoogle,
    update,
    logOut,
    setIsLoading,
    filterObject,
    setFilterObject,
    refetchUserDB,
    setRefetchUserDB,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
