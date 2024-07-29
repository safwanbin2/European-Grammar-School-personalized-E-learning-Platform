import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const MySubmission = ({ prevSubmission }) => {
  return (
    <div className="bg-base-200 p-5 rounded space-y-5">
      <form className="space-y-5">
        <div className="form-control col-span-4">
          <label className="text-sm mb-2">Description: </label>
          <textarea
            disabled
            type="text"
            placeholder={prevSubmission?.submissionText}
            className="shadow bg-white focus:outline-none rounded p-2  w-full border"
          />
        </div>
        {prevSubmission?.submissionFile ? (
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm mb-2">Attachment: </label>
              <div>
                <a
                  href={prevSubmission?.submissionFile}
                  download={prevSubmission?.submissionFile}
                  className="flex items-center gap-1 text-gray-500"
                >
                  <FaCloudDownloadAlt className="text-2xl" />
                  <p className="text-xs">attachment</p>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <label className="text-sm mb-2">Attachment: </label>
        )}
      </form>
      <div className="divider"></div>
      <div>
        <h2 className="text-xl font-bold">
          Result: {prevSubmission?.mark ? prevSubmission?.mark : "Pending"}
        </h2>
      </div>
    </div>
  );
};

export default MySubmission;
