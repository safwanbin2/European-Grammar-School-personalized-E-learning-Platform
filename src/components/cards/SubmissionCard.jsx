import { useForm } from "react-hook-form";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

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
  } = submission ?? {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
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
            <p className="text-xs text-gray-500">{date}</p>
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
          onSubmit={handleSubmit(handleAddProduct)}
          className="grid grid-cols-2 gap-2 w-[150px]"
        >
          <div className="form-control">
            <input
              {...register("title", {
                required: "give mark",
              })}
              type="number"
              placeholder="Assign mark"
              className="shadow bg-white focus:outline-none rounded p-2  w-full border"
            />
            {errors.title && (
              <label className="label text-red-400 text-xs ps-0">
                <span className="">{errors.title.message}</span>
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
