import React from "react";
import MakeAnnouncement from "./MakeAnnouncement";
import ClassMaterials from "./ClassMaterials";
import { Link, useParams } from "react-router-dom";

const SingleSubject = () => {
  const { classId, subjectId } = useParams();
  return (
    <div className="space-y-5">
      <div className="w-full bg-base-300 p-10 rounded flex flex-col justify-between items-center gap-5">
        <h2>Class Title - Subject Title</h2>
        <div className="flex gap-2">
          <Link
            to={`/dashboard/classes/${classId}/subject/${subjectId}/invite-student`}
            className="btn btn-sm btn-info text-white"
          >
            Invite Student
          </Link>
          <Link
            to={`/dashboard/classes/${classId}/subject/${subjectId}/invite-teacher`}
            className="btn btn-sm btn-info text-white"
          >
            Invite Teacher
          </Link>
          <Link
            to={`/dashboard/classes/${classId}/subject/${subjectId}/attendence`}
            className="btn btn-sm btn-success text-white"
          >
            Attendence
          </Link>
          <Link
            to={`/dashboard/classes/${classId}/subject/${subjectId}/class-work`}
            className="btn btn-sm btn-success text-white"
          >
            Class Work
          </Link>
        </div>
      </div>
      <MakeAnnouncement />
      <ClassMaterials />
    </div>
  );
};

export default SingleSubject;
