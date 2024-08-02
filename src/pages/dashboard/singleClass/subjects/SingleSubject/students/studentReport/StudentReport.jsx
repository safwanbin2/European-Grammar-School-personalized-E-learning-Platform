import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../../../../../../config";
import { toast } from "sonner";
import AttendenceReport from "./AttendenceReport";
import ClassWorksReport from "./ClassWorksReport";

const StudentReport = () => {
  const { classId, subjectId, studentEmail } = useParams();
  const [report, setReport] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${config.base_url}/class/${classId}/subject/${subjectId}/students/${studentEmail}/report`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data?.success) {
          throw new Error(data?.message);
        }
        setReport(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err?.message || "Something went wrong!");
      });
  }, [classId, subjectId, studentEmail]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h2 className="font-semibold">Subject Details:</h2>
        <div>
          <div className="w-full bg-base-200 p-5 rounded flex flex-col justify-between items-center gap-5">
            <h2 className="font-semibold">
              {report?.subject?.classTitle
                ? report?.subject?.classTitle
                : "Class Title"}{" "}
              -{" "}
              {report?.subject?.subjectTitle
                ? report?.subject?.subjectTitle
                : "Subject Title"}
            </h2>
            <p className="text-sm">{report?.subject?.description}</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="font-semibold">Student Details:</h2>
        <div>
          <h2 className="">
            Name: {report?.user?.firstName + " " + report?.user?.lastName}
          </h2>
          <h2 className="">Email: {report?.user?.email}</h2>
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="font-semibold">Attendence Report:</h2>
        {report?.attendence?.length ? (
          <AttendenceReport attendence={report?.attendence} />
        ) : (
          <p>No record found!</p>
        )}
      </div>
      <div className="space-y-3">
        <h2 className="font-semibold">Assignment Report:</h2>
        {report?.classWorks?.length ? (
          <ClassWorksReport classWorks={report?.classWorks} />
        ) : (
          <p>No record found!</p>
        )}
      </div>
    </div>
  );
};

export default StudentReport;
