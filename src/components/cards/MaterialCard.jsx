import { IoPerson } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";

const MaterialCard = ({ material }) => {
  const {
    _id,
    classId,
    subjectId,
    classTitle,
    subjectTitle,
    materialText,
    materialFile,
    teacherEmail,
    date,
  } = material ?? {};
  return (
    <div className="w-full border-2 p-5 rounded space-y-5">
      <div className="flex gap-2">
        <div className="bg-base-200 rounded-full h-10 w-10 flex justify-center items-center">
          <IoPerson className="text-xl" />
        </div>
        <div>
          <p className="text-sm">{teacherEmail}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      {materialText ? <p className="text-sm">{materialText}</p> : ""}
      {materialFile ? (
        <div>
          <a
            href={materialFile}
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
  );
};

export default MaterialCard;
