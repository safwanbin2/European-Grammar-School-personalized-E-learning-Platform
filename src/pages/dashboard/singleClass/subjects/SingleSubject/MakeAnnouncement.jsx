import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthContext/AuthProvider";
import { toast } from "sonner";
import config from "../../../../../config";

const MakeAnnouncement = ({ subject }) => {
  const { user } = useContext(AuthContext);
  const { classId, subjectId } = useParams();
  const [materialFile, setMaterialFile] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddMaterial = (data) => {
    data.classId = classId;
    data.subjectId = subjectId;
    data.classTitle = subject?.classTitle;
    data.subjectTitle = subject?.subjectTitle;
    data.materialFile = materialFile;
    data.teacherEmail = user?.email;
    console.log(data);
  };

  const handleFileUpload = (e) => {
    setLoading(true);
    // upload the file to db and set the materialFile
    const file = e.target.value;
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
        setMaterialFile(data?.data?.secure_url);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Something went wrong");
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleAddMaterial)} className="space-y-5">
      <div className="grid grid-cols-5 gap-2">
        <div className="form-control col-span-4">
          <textarea
            {...register("materialText", {
              required: "Provide a title",
            })}
            type="text"
            placeholder="Add teaching materials"
            className="shadow bg-white focus:outline-none rounded p-2  w-full border"
          />
          {errors.title && (
            <label className="label text-red-400 text-xs ps-0">
              <span className="">{errors.title.message}</span>
            </label>
          )}
        </div>
        <div className="form-control">
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
            Add
          </button>
        ) : (
          <button className="btn btn-sm btn-success text-white" type="submit">
            Add
          </button>
        )}
      </div>
    </form>
  );
};

export default MakeAnnouncement;
