import React from "react";
import MakeAnnouncement from "./MakeAnnouncement";

const SingleSubject = () => {
  return (
    <div className="space-y-5">
      <div className="w-full bg-base-200 p-10 rounded flex justify-between items-center">
        <h2>Class Title - Subject Title</h2>
        <div>
          <button className="btn btn-sm btn-success text-white">
            Invite Teacher
          </button>
        </div>
      </div>
      <MakeAnnouncement />
    </div>
  );
};

export default SingleSubject;
