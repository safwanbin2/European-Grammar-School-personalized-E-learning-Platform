import React from "react";
import MakeAnnouncement from "./MakeAnnouncement";
import ClassMaterials from "./ClassMaterials";

const SingleSubject = () => {
  return (
    <div className="space-y-5">
      <div className="w-full bg-base-300 p-10 rounded flex justify-between items-center">
        <h2>Class Title - Subject Title</h2>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-warning text-white">
            Invite Student
          </button>
          <button className="btn btn-sm btn-success text-white">
            Invite Teacher
          </button>
        </div>
      </div>
      <MakeAnnouncement />
      <ClassMaterials />
    </div>
  );
};

export default SingleSubject;
