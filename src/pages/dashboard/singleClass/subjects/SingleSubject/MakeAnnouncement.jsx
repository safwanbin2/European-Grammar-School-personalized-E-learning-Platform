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
      <div className="form-control">
        <textarea
          {...register("title", {
            required: "Provide a title",
          })}
          type="text"
          placeholder="Announce to the class"
          className="shadow bg-white focus:outline-none rounded p-2  w-full border"
        />
        {errors.title && (
          <label className="label text-red-400 text-xs ps-0">
            <span className="">{errors.title.message}</span>
          </label>
        )}
      </div>
      <div>
        <button
          className="btn btn-sm btn-success text-white me-4 rounded-3xl hover:shadow-lg"
          type="submit"
        >
          make announcement
        </button>
      </div>
    </form>
  );
};

export default MakeAnnouncement;
