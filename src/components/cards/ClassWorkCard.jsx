import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

const ClassWorkCard = ({ classWork, membership }) => {
  const { subjectId, classId } = useParams();
  const {
    teacherEmail,
    date,
    submissionDate,
    instructionText,
    instructionFile,
  } = classWork ?? {};
  let pd = new Date(date);
  let sd = new Date(submissionDate);

  let postDate =
    pd.getDate() + "/" + (pd.getMonth() + 1) + "/" + pd.getFullYear();
  let subDate =
    sd.getDate() + "/" + (sd.getMonth() + 1) + "/" + sd.getFullYear();
  return (
    <div className="w-full border-2 p-5 rounded flex flex-col md:flex-row gap-5 justify-between">
      <div className="space-y-5">
        <div className="flex gap-2">
          <div className="bg-base-200 rounded-full h-10 w-10 flex justify-center items-center">
            <IoPerson className="text-xl" />
          </div>
          <div>
            <p className="text-sm">{teacherEmail}</p>
            <p className="text-xs text-gray-500">{postDate}</p>
          </div>
        </div>
        {instructionText ? <p className="text-sm">{instructionText}</p> : ""}
        {instructionFile ? (
          <div>
            <a
              href={instructionFile}
              className="flex items-center gap-1 text-gray-500"
            >
              <FaCloudDownloadAlt className="text-2xl" />
              <p className="text-xs">attachment</p>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <div className="flex flex-col gap-2 md:gap-1">
          <label className="text-xs">*submit before {subDate}</label>
          {membership?.role === "teacher" ? (
            <Link
              to={`/dashboard/classes/${classId}/subject/${subjectId}/class-work/${classWork?._id}/view-submission`}
              className="btn btn-info btn-sm text-white"
            >
              View Submission
            </Link>
          ) : (
            <Link
              to={`/dashboard/classes/${classId}/subject/${subjectId}/class-work/${classWork?._id}/submit`}
              className="btn btn-success btn-sm text-white"
            >
              View
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassWorkCard;
