import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TakeAttendence from "./TakeAttendence";
import AttendenceHistory from "./AttendenceHistory";
import { useParams } from "react-router-dom";
import config from "../../../config";
import { toast } from "sonner";

const Attendence = () => {
  const { classId, subjectId } = useParams();
  const [subject, setSubject] = useState({});

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
  return (
    <div>
      <TakeAttendence subject={subject} />
    </div>
  );
};

export default Attendence;
