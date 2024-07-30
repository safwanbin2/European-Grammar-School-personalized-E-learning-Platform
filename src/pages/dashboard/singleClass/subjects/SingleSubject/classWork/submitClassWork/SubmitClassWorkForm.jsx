import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../../../../contexts/AuthContext/AuthProvider";
import config from "../../../../../../../config";
import { toast } from "sonner";

const SubmitClassWorkForm = ({ subject, refetch, setRefetch, classWork }) => {
  const { classId, subjectId, classWorkId } = useParams();
  const { user, userDB } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [submissionFile, setSubmissionFile] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    setLoading(true);
    data.classWorkId = classWorkId;
    data.classId = classId;
    data.classTitle = subject?.classTitle;
    data.subjectId = subjectId;
    data.subjectTitle = subject?.subjectTitle;
    data.instructionText = classWork?.instructionText;
    data.instructionFile = classWork?.instructionFile;
    data.teacherEmail = classWork?.teacherEmail;
    data.submissionDate = classWork?.submissionDate;
    // data.submissionText = "done"
    data.submissionFile = submissionFile;
    data.studentEmail = user?.email;
    data.studentName =
      user?.displayName || userDB?.firstName + userDB?.lastName;
    data.studentId = userDB?._id;

    fetch(`${config.base_url}/class-work/submission/create`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(data?.message);
        setRefetch((prev) => !prev);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Something went wrong");
        setLoading(false);
      });
  };

  const handleFileUpload = (e) => {
    setLoading(true);
    // upload the file to db and set the materialFile
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    fetch(`${config.base_url}/upload-file`, {
      method: "POST",
      // headers: { "content-type": "application/json" },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubmissionFile(data?.data?.secure_url);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Something went wrong");
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-5">
      <div className="form-control w-full md:w-6/12">
        <label className="text-sm mb-2">Text: </label>
        <textarea
          {...register("submissionText", {
            required: "Add text",
          })}
          type="text"
          placeholder="Description"
          className="shadow bg-white focus:outline-none rounded p-2  w-full border"
        />
        {errors.submissionText && (
          <label className="label text-red-400 text-xs ps-0">
            <span className="">{errors.submissionText.message}</span>
          </label>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="text-sm mb-2">Attachment: </label>
          <input
            onChange={handleFileUpload}
            accept="application/pdf"
            type="file"
            placeholder="Add teaching materials"
            className="shadow bg-white focus:outline-none rounded p-2  w-full h-full border cursor-pointer"
          />
        </div>
      </div>
      <div>
        {loading ? (
          <button
            disabled
            className="btn btn-sm btn-disabled text-white"
            type="submit"
          >
            Submit
          </button>
        ) : (
          <button className="btn btn-sm btn-success text-white" type="submit">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default SubmitClassWorkForm;
