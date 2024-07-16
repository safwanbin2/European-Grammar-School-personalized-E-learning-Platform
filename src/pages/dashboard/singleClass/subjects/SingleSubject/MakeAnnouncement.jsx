import React from "react";
import { useForm } from "react-hook-form";

const MakeAnnouncement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-5">
      <div className="grid grid-cols-5 gap-2">
        <div className="form-control col-span-4">
          <textarea
            {...register("title", {
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
            {...register("title", {
              required: "Provide a title",
            })}
            type="file"
            placeholder="Add teaching materials"
            className="shadow bg-white focus:outline-none rounded p-2  w-full h-full border"
          />
          {errors.title && (
            <label className="label text-red-400 text-xs ps-0">
              <span className="">{errors.title.message}</span>
            </label>
          )}
        </div>
      </div>
      <div>
        <button className="btn btn-sm btn-success text-white" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default MakeAnnouncement;
