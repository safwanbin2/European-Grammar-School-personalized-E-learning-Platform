import React, { useState } from "react";
import SubmissionCard from "../../../../../../../components/cards/SubmissionCard";

const ViewSubmission = () => {
  const [submissions, setSubmissions] = useState([
    {
      _id: 1,
      classId: "c1",
      subjectId: "s1",
      classWorkId: "cs1",
      studentId: "st1",
      studentEmail: "www.student@gmail.com",
      submissionText: "dsdsd sds ds dsd sds dsds ds dsd sds ds d",
      submissionFile: "www.facebook.com",
      classTitle: "class 7",
      subjectTitle: "Maths",
      teacherEmail: "www.teacher@gmail.com",
      date: "2323-23-23",
      submissionDate: "2323-23-23",
    },
    {
      _id: 2,
      classId: "c1",
      subjectId: "s1",
      classWorkId: "cs1",
      studentId: "st1",
      studentEmail: "www.student@gmail.com",
      submissionText: "dsdsd sds ds dsd sds dsds ds dsd sds ds d",
      submissionFile: "www.facebook.com",
      classTitle: "class 7",
      subjectTitle: "Maths",
      teacherEmail: "www.teacher@gmail.com",
      date: "2323-23-23",
      submissionDate: "2323-23-23",
    },
    {
      _id: 3,
      classId: "c1",
      subjectId: "s1",
      classWorkId: "cs1",
      studentId: "st1",
      studentEmail: "www.student@gmail.com",
      submissionText: "dsdsd sds ds dsd sds dsds ds dsd sds ds d",
      submissionFile: "www.facebook.com",
      classTitle: "class 7",
      subjectTitle: "Maths",
      teacherEmail: "www.teacher@gmail.com",
      date: "2323-23-23",
      submissionDate: "2323-23-23",
    },
  ]);
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
