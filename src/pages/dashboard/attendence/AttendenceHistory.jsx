import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../../config";
import { toast } from "sonner";
import AttendenceHistoryTableBody from "../../../components/table/AttendenceHistoryTableBody";

const AttendenceHistory = () => {
  const { subjectId } = useParams();
  let d = new Date();
  const [filterDate, setFilterDate] = useState(
    d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
  );
  const [attendence, setAttendence] = useState({});
  const [students, setStudents] = useState({});

  useEffect(() => {
    fetch(
      `${config.base_url}/subject/${subjectId}/attendence/history?date=${filterDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(data?.message);
        setAttendence(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  }, [subjectId, filterDate]);

  const handleFilterDate = (e) => {
    let d = new Date(e.target.value);
    setFilterDate(
      d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
    );
  };

  useEffect(() => {
    if (attendence) {
      let objKeys = Object.keys(attendence);
      let students = [];
      objKeys.forEach((key) => {
        if (/^[a-fA-F0-9]{24}$/.test(key)) {
          students.push({
            id: key,
            status: attendence[key],
          });
        }
      });
      setStudents(students);
    } else {
      setStudents([]);
    }
  }, [attendence]);

  return (
    <div className="space-y-5">
      <h2 className="text-base font-semibold">
        Attendence History: {filterDate}
      </h2>
      <form className="space-y-5">
        <div className="form-control">
          <label className="text-sm mb-2">Select Date: </label>
          <input
            onChange={handleFilterDate}
            type="date"
            className="shadow bg-white focus:outline-none rounded p-2 border w-[300px]"
          />
        </div>
      </form>
      {/* <h2 className="text-red-400">No Records found*</h2> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students?.length
              ? students?.map((str, i) => (
                  <AttendenceHistoryTableBody key={i} str={str} />
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendenceHistory;
