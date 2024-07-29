import { useForm } from "react-hook-form";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import config from "../../config";
import { toast } from "sonner";

const SubmissionCard = ({ submission }) => {
  const {
    _id,
    classId,
    subjectId,
    classWorkId,
    studentId,
    studentEmail,
    submissionText,
    submissionFile,
    classTitle,
    subjectTitle,
    teacherEmail,
    date,
    submissionDate,
    mark,
  } = submission ?? {};

  let d = new Date();
  let submittedDate =
    d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleMark = (data) => {
    fetch(`${config.base_url}/submission/${_id}/mark?totalMark=${data?.mark}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(data?.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  };

  return (
    <div className="w-full border-2 p-5 rounded flex justify-between gap-10">
      <div className="space-y-5">
        <div className="flex gap-2">
          <div className="bg-base-200 rounded-full h-10 w-10 flex justify-center items-center">
            <IoPerson className="text-xl" />
          </div>
          <div>
            <p className="text-sm">{studentEmail}</p>
            <p className="text-xs text-gray-500">{submittedDate}</p>
          </div>
        </div>
        {submissionText ? <p className="text-sm">{submissionText}</p> : ""}
        {submissionFile ? (
          <div>
            <a
              href={submissionFile}
              className="flex items-center gap-1 text-gray-500"
            >
              <FaCloudDownloadAlt className="text-2xl" />
              <p className="text-xs">attachment</p>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <form
          onSubmit={handleSubmit(handleMark)}
          className="grid grid-cols-2 gap-2 w-[150px]"
        >
          <div className="form-control">
            <input
              {...register("mark", {
                required: "give mark",
              })}
              type="number"
              placeholder="Assign mark"
              className="shadow bg-white focus:outline-none rounded p-2  w-full border"
              defaultValue={mark}
            />
            {errors.mark && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">{errors.mark.message}</span>
              </label>
            )}
          </div>

          <button
            className="btn btn-sm btn-success text-white h-auto"
            type="submit"
          >
            Mark
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmissionCard;
