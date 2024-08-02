import React, { useState } from "react";
import { useForm } from "react-hook-form";
import config from "../../../config";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAddClass = (data) => {
    setLoading(true);
    fetch(`${config.base_url}/class/create`, {
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
          navigate("/dashboard/classes");
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

  return (
    <div>
      <h2 className="text-base font-semibold my-6 text-grey">Add Class: </h2>
      <form onSubmit={handleSubmit(handleAddClass)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label ps-0">
              <span className="">Title</span>
            </label>
            <input
              {...register("classTitle", {
                required: "Provide a title",
              })}
              type="text"
              placeholder="title"
              className="shadow bg-white focus:outline-none rounded p-2  w-full border"
            />
            {errors.classTitle && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">{errors.classTitle.message}</span>
              </label>
            )}
          </div>
        </div>

        <div>
          {loading ? (
            <button
              className="btn btn-sm btn-disabled text-white me-4 rounded-3xl hover:shadow-lg"
              disabled
            >
              Adding Class
            </button>
          ) : (
            <button
              className="btn btn-sm btn-success text-white me-4 rounded-3xl hover:shadow-lg"
              type="submit"
            >
              Add Class
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddClass;
