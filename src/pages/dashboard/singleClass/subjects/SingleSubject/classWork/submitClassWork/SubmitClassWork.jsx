import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SubmitClassWorkForm from "./SubmitClassWorkForm";
import MySubmission from "./MySubmission";
import config from "../../../../../../../config";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../../../../../../contexts/AuthContext/AuthProvider";

const SubmitClassWork = () => {
  const { user } = useContext(AuthContext);
  const { classId, subjectId, classWorkId } = useParams();
  const [subject, setSubject] = useState({});
  const [classWork, setClassWork] = useState({});
  const [prevSubmission, setPrevSubmission] = useState({});
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(true);

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
    fetch(`${config.base_url}/class-work/single/${classWorkId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClassWork(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  }, [classWorkId]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${config.base_url}/class-work/${classWorkId}/submission/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPrevSubmission(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
        setLoading(false);
      });
  }, [classWorkId, user, user?.email, refetch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!prevSubmission?.success) {
    return (
      <SubmitClassWorkForm
        subject={subject}
        classWork={classWork}
        refetch={refetch}
        setRefetch={setRefetch}
      />
    );
  }
  return (
    <MySubmission
      prevSubmission={prevSubmission?.data}
      subject={subject}
      refetch={refetch}
      setRefetch={setRefetch}
    />
  );
};

export default SubmitClassWork;
