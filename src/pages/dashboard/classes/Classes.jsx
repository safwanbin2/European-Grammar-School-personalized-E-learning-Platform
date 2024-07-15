import React, { useState } from "react";
import { Link } from "react-router-dom";

const Classes = () => {
  const [classes, setClasses] = useState([
    {
      _id: 1,
      classId: "c1",
      title: "Class 7",
    },
    {
      _id: 2,
      classId: "c2",
      title: "Class 8",
    },
    {
      _id: 3,
      classId: "c3",
      title: "Class 9",
    },
    {
      _id: 4,
      classId: "c4",
      title: "Class 10",
    },
    {
      _id: 5,
      classId: "c5",
      title: "Class 11",
    },
  ]);

  return (
    <div>
      <h2 className="text-base font-semibold mb-2">Classes:</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
                    <td>{cls.title}</td>
                    <td>
                      <Link
                        to={`/dashboard/classes/${cls?._id}`}
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
          to="/dashboard/add-new-class"
          className="btn btn-sm btn-success text-white"
        >
          Add New Class
        </Link>
      </div>
    </div>
  );
};

export default Classes;
