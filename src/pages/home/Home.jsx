import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);
  // return (
  //   <div className="">
  //     <Hero />
  //   </div>
  // );
};

export default Home;
