import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

const TakeAttendence = () => {
  const { classId, subjectId } = useParams();

  const [students, setStudents] = useState([
    {
      _id: "1",
      studentId: "s1",
      classId: "c1",
      subjectId: "s1",
      classTitle: "dssd",
      subjectTitle: "dsds",
      studentEmail: "student@gmail.com",
    },
    {
      _id: "2",
      studentId: "s1",
      classId: "c1",
      subjectId: "s1",
      classTitle: "dssd",
      subjectTitle: "dsds",
      studentEmail: "student@gmail.com",
    },
    {
      _id: "3",
      studentId: "s1",
      classId: "c1",
      subjectId: "s1",
      classTitle: "dssd",
      subjectTitle: "dsds",
      studentEmail: "student@gmail.com",
    },
    {
      _id: "4",
      studentId: "s1",
      classId: "c1",
      subjectId: "s1",
      classTitle: "dssd",
      subjectTitle: "dsds",
      studentEmail: "student@gmail.com",
    },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    let d = new Date();
    data.date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    console.log(data);
  };

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-5">
        {/* <div className="form-control">
          <label className="text-sm mb-2">Attendence: </label>
          <input
          {...register("recordDate", {required: "Provide a title",})}
            type="date"
            className="shadow bg-white focus:outline-none rounded p-2 border w-[300px]"
          />
        </div> */}
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-base">
            Record Today's Attendence:{" "}
          </h2>
          <Link
            to={`/dashboard/classes/${classId}/subject/${subjectId}/attendence-history`}
            className="link btn btn-info text-white btn-sm"
          >
            Attendence History
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students?.length
                ? students?.map((str, i) => (
                    <tr key={i} str={str}>
                      <th>{i + 1}</th>
                      <td>John Doe</td>
                      <td>{str.studentEmail}</td>
                      <td>
                        <select
                          {...register(str?.studentEmail, {
                            required: "Provide a title",
                          })}
                          className="shadow bg-white focus:outline-none rounded p-1 border"
                        >
                          <option value="present">present</option>
                          <option value="absent">absent</option>
                        </select>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
        <div>
          <button className="btn btn-sm btn-success text-white" type="submit">
            Record Attendence
          </button>
        </div>
      </form>
    </div>
  );
};

export default TakeAttendence;
