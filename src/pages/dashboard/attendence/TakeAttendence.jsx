import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import config from "../../../config";
import { toast } from "sonner";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";

const TakeAttendence = ({ subject }) => {
  const { user } = useContext(AuthContext);
  const { classId, subjectId } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    setLoading(true);
    let d = new Date();
    data.date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    data.classId = classId;
    data.subjectId = subjectId;
    data.classTitle = subject?.classTitle;
    data.subjectTitle = subject?.subjectTitle;
    data.teacherEmail = user?.email;

    fetch(`${config.base_url}/attendence/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        if (!data?.success) {
          throw new Error(data?.message);
        }
        toast.success(data?.message);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  };

  useEffect(() => {
    fetch(`${config.base_url}/subject/${subjectId}/student`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudents(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  }, [subjectId]);

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-base">
            Record Today's Attendence:{" "}
          </h2>
          <Link
            to={`/dashboard/classes/${classId}/subject/${subjectId}/attendence-history`}
            className="btn btn-info text-white btn-sm"
          >
            Attendence History
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students?.length
                ? students?.map((str, i) => (
                    <tr key={i} str={str}>
                      <th>{i + 1}</th>
                      <td>{str?.firstName + " " + str?.lastName}</td>
                      <td>{str?.email}</td>
                      <td>
                        <select
                          {...register(str?._id, {
                            required: "Provide a title",
                          })}
                          className="shadow bg-white focus:outline-none rounded p-1 border"
                        >
                          <option defaultChecked value="present">
                            present
                          </option>
                          <option value="absent">absent</option>
                        </select>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
        <div>
          {loading ? (
            <button disabled className="btn btn-sm btn-disabled text-white">
              Recording...
            </button>
          ) : (
            <button className="btn btn-sm btn-success text-white" type="submit">
              Record Attendence
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TakeAttendence;
