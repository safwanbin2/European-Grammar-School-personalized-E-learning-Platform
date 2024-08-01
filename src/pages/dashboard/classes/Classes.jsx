import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import config from "../../../config";
import { toast } from "sonner";

const Classes = () => {
  const { userDB } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [classLoading, setClassLoading] = useState(false);
  useEffect(() => {
    setClassLoading(true);
    if (userDB?.role === "admin") {
      fetch(`${config.base_url}/class/all`)
        .then((res) => res.json())
        .then((data) => {
          setClasses(data?.data);
          setClassLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.message || "Something went   wrong");
          setClassLoading(false);
        });
    } else {
      fetch(`${config.base_url}/class/my-class/${userDB?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setClasses(data?.data);
          setClassLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.message || "Something went   wrong");
          setClassLoading(false);
        });
    }
  }, [userDB, userDB?.role, userDB?.email]);

  return (
    <div>
      <h2 className="text-base font-semibold mb-2">Classes:</h2>
      <div className="overflow-x-auto">
        {classLoading ? (
          <h2>Loading...</h2>
        ) : classes?.length ? (
          <table className="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes?.length
                ? classes?.map((cls, i) => (
                    <tr key={i} cls={cls}>
                      <th>{i + 1}</th>
                      <td>{cls.classTitle}</td>
                      <td>
                        {userDB?.role === "admin" ? (
                          <Link
                            to={`/dashboard/classes/${cls?._id}`}
                            className="btn btn-sm"
                          >
                            View
                          </Link>
                        ) : (
                          <Link
                            to={`/dashboard/classes/${cls?.classId}`}
                            className="btn btn-sm"
                          >
                            View
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        ) : userDB?.role === "admin" ? (
          ""
        ) : (
          <h2 className="mt-5">Ask teacher for invitation!</h2>
        )}
      </div>
      {userDB?.role === "admin" && (
        <div className="mt-5">
          <Link
            to="/dashboard/add-new-class"
            className="btn btn-sm btn-success text-white"
          >
            Add New Class
          </Link>
        </div>
      )}
    </div>
  );
};

export default Classes;
