import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext/AuthProvider";
import config from "../../../../config";
import { toast } from "sonner";

const Subjects = () => {
  const { classId } = useParams();
  const { userDB } = useContext(AuthContext);
  const [subjects, setSubjects] = useState([
    {
      _id: 1,
      classId: "c1",
      title: "Physics",
      classTitle: "Class 7",
      description: "sdsdsjds sdusg dsuidg sugd sgdsiuydg sidug s sdigsd gsuidg",
    },
  ]);

  useEffect(() => {
    if (userDB?.role === "admin") {
      fetch(`${config.base_url}/class/${classId}/subjects`)
        .then((res) => res.json())
        .then((data) => {
          setSubjects(data?.data);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.message || "Something went   wrong");
        });
    } else {
      fetch(`${config.base_url}/class/${classId}/my-subject/${userDB?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setSubjects(data?.data);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.message || "Something went   wrong");
        });
    }
  }, [userDB, userDB?.role, userDB?.email, classId]);
  return (
    <div>
      <h2 className="text-base font-semibold mb-2">Subjects:</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
                      <Link
                        to={`/dashboard/classes/${sub?.classId}/subject/${sub?._id}`}
                        className="btn btn-sm"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <Link
          to={`/dashboard/classes/${classId}/add-new-subject`}
          className="btn btn-sm btn-success text-white"
        >
          Add New Subject
        </Link>
      </div>
    </div>
  );
};

export default Subjects;
