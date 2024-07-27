import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitClassWorkForm from "./SubmitClassWorkForm";
import MySubmission from "./MySubmission";

const SubmitClassWork = () => {
  return (
    <div>
      <SubmitClassWorkForm />
      <MySubmission />
    </div>
  );
};

export default SubmitClassWork;
