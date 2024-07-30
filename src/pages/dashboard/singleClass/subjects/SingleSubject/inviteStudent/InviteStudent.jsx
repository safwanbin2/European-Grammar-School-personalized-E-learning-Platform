import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import config from "../../../../../../config";
import { toast } from "sonner";

const InviteStudent = () => {
  const { classId, subjectId } = useParams();
  const [subject, setSubject] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${config.base_url}/subject/single/${subjectId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubject(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  }, [subjectId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInviteStudent = (data) => {
    setLoading(true);

    data.classId = classId;
    data.subjectId = subjectId;
    data.classTitle = subject?.classTitle;
    data.subjectTitle = subject?.subjectTitle;
    data.role = "student";

    fetch(`${config.base_url}/invite`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        toast.success(data?.message);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  };

  return (
    <div>
      <h2 className="text-base font-semibold my-6 text-grey">
        Invite Student:{" "}
      </h2>
      <form onSubmit={handleSubmit(handleInviteStudent)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label ps-0">
              <span className="">Email</span>
            </label>
            <input
              {...register("email", {
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
          {loading ? (
            <button
              className="btn btn-sm btn-disabled text-white me-4 rounded-3xl hover:shadow-lg"
              disabled
            >
              Inviting Student...
            </button>
          ) : (
            <button
              className="btn btn-sm btn-success text-white me-4 rounded-3xl hover:shadow-lg"
              type="submit"
            >
              Invite Student
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default InviteStudent;
