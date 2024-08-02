import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config";
import { toast } from "sonner";

const AddSubject = () => {
  const { classId } = useParams();
  const [classInfo, setClassInfo] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddClass = (data) => {
    setLoading(true);

    data.classId = classId;
    data.classTitle = classInfo?.classTitle;
    fetch(`${config.base_url}/subject/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.success) {
          toast.success(data?.message);
          navigate(`/dashboard/classes/${classId}`);
          setLoading(false);
        } else {
          toast.error(data?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`${config.base_url}/class/single/${classId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClassInfo(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  }, [classId]);

  return (
    <div>
      <h2 className="text-xl my-6 text-grey">
        Add Subject to {classInfo?.classTitle}:{" "}
      </h2>
      <form onSubmit={handleSubmit(handleAddClass)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label ps-0">
              <span className="">Subject Title</span>
            </label>
            <input
              {...register("subjectTitle", {
                required: "Provide a title",
              })}
              type="text"
              placeholder="title"
              className="shadow bg-white focus:outline-none rounded p-2  w-full border"
            />
            {errors.title && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">{errors.title.message}</span>
              </label>
            )}
          </div>
        </div>
        <div className="form-control w-full md:w-6/12">
          <label className="label ps-0">
            <span className="">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: "Provide a broad description",
            })}
            rows="3"
            className="shadow bg-white focus:outline-none rounded p-2  w-full border"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <label className="label text-red-400 text-xs ps-0">
              <span className="">{errors.description.message}</span>
            </label>
          )}
        </div>

        <div>
          {loading ? (
            <button
              className="btn btn-sm btn-disabled text-white me-4 rounded-3xl hover:shadow-lg"
              disabled
            >
              Adding Subject
            </button>
          ) : (
            <button
              className="btn btn-sm btn-success text-white me-4 rounded-3xl hover:shadow-lg"
              type="submit"
            >
              Add Subject
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddSubject;
