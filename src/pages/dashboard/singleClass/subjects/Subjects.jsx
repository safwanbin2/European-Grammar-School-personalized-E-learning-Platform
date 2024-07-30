import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext/AuthProvider";
import config from "../../../../config";
import { toast } from "sonner";

const Subjects = () => {
  const { classId } = useParams();
  const { userDB } = useContext(AuthContext);
  const [subjects, setSubjects] = useState([]);
  const [subjectsLoading, setSubjectsLoading] = useState(false);

  useEffect(() => {
    setSubjectsLoading(true);
    if (userDB?.role === "admin") {
      fetch(`${config.base_url}/class/${classId}/subjects`)
        .then((res) => res.json())
        .then((data) => {
          setSubjects(data?.data);
          setSubjectsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.message || "Something went   wrong");
          setSubjectsLoading(false);
        });
    } else {
      fetch(`${config.base_url}/class/${classId}/my-subject/${userDB?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSubjects(data?.data);
          setSubjectsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.message || "Something went   wrong");
          setSubjectsLoading(false);
        });
    }
  }, [userDB, userDB?.role, userDB?.email, classId]);
  return (
    <div>
      <h2 className="text-base font-semibold mb-2">Subjects:</h2>
      <div className="overflow-x-auto">
        {subjectsLoading ? (
          <h2>Loading...</h2>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subjects?.length
                ? subjects?.map((sub, i) => (
                    <tr key={i} sub={sub}>
                      <th>{i + 1}</th>
                      <td>{sub.subjectTitle}</td>
                      <td>
                        {sub?.description?.length > 30
                          ? sub?.description?.slice(0, 30) + "..."
                          : sub?.description}
                      </td>
                      <td>
                        {userDB?.role === "admin" ? (
                          <Link
                            to={`/dashboard/classes/${sub?.classId}/subject/${sub?._id}`}
                            className="btn btn-sm"
                          >
                            View
                          </Link>
                        ) : (
                          <Link
                            to={`/dashboard/classes/${sub?.classId}/subject/${sub?.subjectId}`}
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
        )}
      </div>
      {userDB?.role === "admin" && (
        <div className="mt-5">
          <Link
            to={`/dashboard/classes/${classId}/add-new-subject`}
            className="btn btn-sm btn-success text-white"
          >
            Add New Subject
          </Link>
        </div>
      )}
    </div>
  );
};

export default Subjects;
