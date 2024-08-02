import React, { useContext, useEffect, useState } from "react";
import AddClassWorkForm from "./AddClassWorkForm";
import ClassWorkCard from "../../../../../../components/cards/ClassWorkCard";
import { useParams } from "react-router-dom";
import config from "../../../../../../config";
import { toast } from "sonner";
import { AuthContext } from "../../../../../../contexts/AuthContext/AuthProvider";

const ClassWork = () => {
  const { userDB } = useContext(AuthContext);
  const { classId, subjectId } = useParams();
  const [classWorks, setClassWorks] = useState([]);
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
    fetch(`${config.base_url}/subject/${subjectId}/class-work/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setClassWorks(data?.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Something went wrong");
      });
  }, [subjectId, refetch]);

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
      <div>
        <h2 className="text-base font-semibold">Assignment: </h2>
      </div>
      {membership?.role === "teacher" ? (
        <AddClassWorkForm
          subject={subject}
          refetch={refetch}
          setRefetch={setRefetch}
        />
      ) : (
        ""
      )}

      <div className="flex flex-col gap-5">
        {classWorks?.length
          ? classWorks.map((classWork) => (
              <ClassWorkCard
                classWork={classWork}
                key={classWork?._id}
                membership={membership}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default ClassWork;
