import React, { useEffect, useState } from "react";
import SubmissionCard from "../../../../../../../components/cards/SubmissionCard";
import { useParams } from "react-router-dom";
import config from "../../../../../../../config";
import { toast } from "sonner";

const ViewSubmission = () => {
  const { classId, subjectId, classWorkId } = useParams();
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch(`${config.base_url}/class-work/${classWorkId}/submissions/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubmissions(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  }, [classWorkId]);

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-semibold">Answers: </h2>
      </div>
      <div className="flex flex-col gap-5">
        {submissions?.length
          ? submissions.map((submission) => (
              <SubmissionCard submission={submission} key={submission?._id} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default ViewSubmission;
