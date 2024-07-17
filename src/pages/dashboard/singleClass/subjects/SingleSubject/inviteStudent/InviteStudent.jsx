import React from "react";
import { useForm } from "react-hook-form";

const InviteStudent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-base font-semibold my-6 text-grey">
        Invite Student:{" "}
      </h2>
      <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label ps-0">
              <span className="">Email</span>
            </label>
            <input
              {...register("title", {
                required: "Provide a title",
              })}
              type="email"
              placeholder="student email"
              className="shadow bg-white focus:outline-none rounded p-2  w-full border"
            />
            {errors.title && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">{errors.title.message}</span>
              </label>
            )}
          </div>
        </div>

        <div>
          <button
            className="btn btn-sm btn-success text-white me-4 rounded-3xl hover:shadow-lg"
            type="submit"
          >
            Invite Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default InviteStudent;
