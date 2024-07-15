import React, { useContext, useState } from "react";
import UploadImage from "../../components/dashboard/profile/UploadImage";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import config from "../../config";
import LoadingScreen from "../../components/LoadingScreen";
import { toast } from "sonner";

const MyProfile = () => {
  const { user, userDB, setRefetchUserDB } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdate = (data) => {
    setLoading(true);
    fetch(`${config.base_url}/users?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          toast.success("Updated Successfully");
          setLoading(false);
          setRefetchUserDB((prev) => !prev);
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
        setLoading(false);
        console.log(err);
      });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col justify-start items-center gap-5">
      <UploadImage />

      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="mt-2 w-full space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="form-control">
            <label className="label ps-0">
              <span className="">First Name</span>
            </label>
            <input
              {...register("firstName", {
                required: "Can not be empty",
              })}
              defaultValue={userDB?.firstName}
              type="text"
              placeholder="first name"
              className="border rounded-full focus:outline-none p-2  w-full bg-transparent"
            />
            {errors.firstName && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">{errors.firstName.message}</span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label ps-0">
              <span className="">Last Name</span>
            </label>
            <input
              {...register("lastName", {
                // required: "Can not be empty",
              })}
              defaultValue={userDB?.lastName}
              type="text"
              placeholder="last name"
              className="border rounded-full focus:outline-none p-2  w-full bg-transparent"
            />
            {errors.lastName && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">{errors.lastName.message}</span>
              </label>
            )}
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
          <div className="form-control">
            <label className="label ps-0">
              <span className="">Gender</span>
            </label>
            <select
              {...register("gender", {
                required: "gender required",
              })}
              className="border rounded-full focus:outline-none p-2  w-full"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">{errors.gender.message}</span>
              </label>
            )}
          </div>
        </div> */}
        <div className="grid grid-cols-1 gap-2">
          <div className="form-control">
            <label className="label ps-0">
              <span className="">Bio</span>
            </label>
            <textarea
              {...register("bio", {
                // required: "At bio",
                minLength: 6,
              })}
              type="text"
              placeholder="Bio"
              rows="4"
              defaultValue={userDB?.bio}
              className="border rounded-lg focus:outline-none p-2  w-full bg-transparent"
            />
            {errors.bio && errors.bio.type === "required" && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">bio is required</span>
              </label>
            )}
            {errors.bio && errors.bio.type === "minLength" && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">bio is must be avobe 6 character</span>
              </label>
            )}
          </div>
        </div>
        <button className="p-btn rounded-full !py-2 !px-4">Save Changes</button>
      </form>
    </div>
  );
};

export default MyProfile;
