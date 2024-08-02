import React, { useContext, useEffect, useState } from "react";
import MakeAnnouncement from "./MakeAnnouncement";
import ClassMaterials from "./ClassMaterials";
import { Link, useParams } from "react-router-dom";
import config from "../../../../../config";
import { toast } from "sonner";
import { AuthContext } from "../../../../../contexts/AuthContext/AuthProvider";

const SingleSubject = () => {
  const { userDB } = useContext(AuthContext);
  const { classId, subjectId } = useParams();
  const [subject, setSubject] = useState({});
  const [refetch, setRefetch] = useState(false);
  const [membership, setMembership] = useState({});

  useEffect(() => {
    fetch(`${config.base_url}/subject/single/${subjectId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubject(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  }, [subjectId]);

  useEffect(() => {
    fetch(`${config.base_url}/membership/single/${userDB?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMembership(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  }, [userDB, userDB?.email]);

  return (
    <div className="space-y-5">
      <div className="w-full bg-base-200 p-10 rounded flex flex-col justify-between items-center gap-5">
        <h2 className="text-xl font-semibold">
          {subject?.classTitle ? subject?.classTitle : "Class Title"} -{" "}
          {subject?.subjectTitle ? subject?.subjectTitle : "Subject Title"}
        </h2>
        <p>{subject?.description}</p>
        <div className="flex gap-2 flex-col md:flex-row w-full md:w-auto">
          {userDB?.role === "admin" && (
            <>
              <Link
                to={`/dashboard/classes/${classId}/subject/${subjectId}/invite-teacher`}
                className="btn btn-sm btn-info text-white"
              >
                Invite Teacher
              </Link>
              <Link
                to={`/dashboard/classes/${classId}/subject/${subjectId}/invite-student`}
                className="btn btn-sm btn-info text-white"
              >
                Invite Student
              </Link>
              <Link
                to={`/dashboard/classes/${classId}/subject/${subjectId}/students`}
                className="btn btn-sm btn-info text-white"
              >
                Students
              </Link>
            </>
          )}
          {membership?.role === "teacher" ? (
            <>
              <Link
                to={`/dashboard/classes/${classId}/subject/${subjectId}/invite-student`}
                className="btn btn-sm btn-info text-white"
              >
                Invite Student
              </Link>
              <Link
                to={`/dashboard/classes/${classId}/subject/${subjectId}/students`}
                className="btn btn-sm btn-info text-white"
              >
                Students
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
                Assignment
              </Link>
            </>
          ) : (
            ""
          )}

          {membership?.role === "student" ? (
            <Link
              to={`/dashboard/classes/${classId}/subject/${subjectId}/class-work`}
              className="btn btn-sm btn-success text-white"
            >
              Assignment
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <MakeAnnouncement
        refetch={refetch}
        setRefetch={setRefetch}
        subject={subject}
      />
      <ClassMaterials refetch={refetch} setRefetch={setRefetch} />
    </div>
  );
};

export default SingleSubject;
