import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import config from "../../../../../../config";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../../../contexts/AuthContext/AuthProvider";

const AddClassWorkForm = ({ subject, setRefetch }) => {
  const { user } = useContext(AuthContext);
  const { classId, subjectId } = useParams();
  const [loading, setLoading] = useState(false);
  const [instructionFile, setInstructionFile] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddClassWork = (data) => {
    setLoading(true);
    data.classId = classId;
    data.subjectId = subjectId;
    data.classTitle = subject?.classTitle;
    data.subjectTitle = subject?.subjectTitle;
    data.instructionFile = instructionFile;
    data.teacherEmail = user?.email;

    fetch(`${config.base_url}/class-work/create`, {
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
        setInstructionFile(data?.data?.secure_url);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Something went wrong");
        setLoading(false);
      });
  };

  return (
    <div className="bg-base-200 p-5 rounded">
      <form onSubmit={handleSubmit(handleAddClassWork)} className="space-y-5">
        <div className="form-control col-span-4">
          <textarea
            {...register("instructionText", {
              required: "Provide Instruction",
            })}
            type="text"
            placeholder="Text Instruction"
            className="shadow bg-white focus:outline-none rounded p-2  w-full border"
          />
          {errors.title && (
            <label className="label text-red-400 text-xs ps-0">
              <span className="">{errors.title.message}</span>
            </label>
          )}
        </div>
        <div className="grid grid-cols-2 gap-5">
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
          <div className="form-control">
            <label className="text-sm mb-2">Submission Date: </label>
            <input
              {...register("submissionDate", {
                required: "Add a date",
              })}
              type="date"
              className="shadow bg-white focus:outline-none rounded p-2  w-full h-full border cursor-pointer"
            />
            {errors.submissionDate && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">{errors.submissionDate.message}</span>
              </label>
            )}
          </div>
        </div>
        <div>
          {loading ? (
            <button
              disabled
              className="btn btn-sm btn-disabled text-white"
              type="submit"
            >
              Add assignment
            </button>
          ) : (
            <button className="btn btn-sm btn-success text-white" type="submit">
              Add assignment
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddClassWorkForm;
