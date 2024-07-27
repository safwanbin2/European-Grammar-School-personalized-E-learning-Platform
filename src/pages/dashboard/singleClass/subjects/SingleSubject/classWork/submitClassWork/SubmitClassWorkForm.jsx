import React from "react";
import { useForm } from "react-hook-form";

const SubmitClassWorkForm = () => {
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
      <div className="form-control col-span-4">
        <label className="text-sm mb-2">Text: </label>
        <textarea
          {...register("title", {
            required: "Provide a title",
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
            {...register("title", {
              required: "Provide a title",
            })}
            accept="application/pdf"
            type="file"
            placeholder="Add teaching materials"
            className="shadow bg-white focus:outline-none rounded p-2  w-full h-full border cursor-pointer"
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
          Submit
        </button>
      </div>
    </form>
  );
};

export default SubmitClassWorkForm;
