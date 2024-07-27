import React, { useState } from "react";

const AttendenceHistory = () => {
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
  return (
    <div className="space-y-5">
      <h2 className="text-base font-semibold">Attendence History: </h2>
      <form className="space-y-5">
        <div className="form-control">
          <label className="text-sm mb-2">Select Date: </label>
          <input
            type="date"
            className="shadow bg-white focus:outline-none rounded p-2 border w-[300px]"
          />
        </div>
      </form>
      {/* <h2 className="text-red-400">No Records found*</h2> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students?.length
              ? students?.map((str, i) => (
                  <tr key={i} str={str}>
                    <th>{i + 1}</th>
                    <td>John Doe</td>
                    <td>{str.studentEmail}</td>
                    <td>present</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendenceHistory;
