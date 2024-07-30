import React, { useEffect, useState } from "react";
import config from "../../config";

const AttendenceHistoryTableBody = ({ str, key }) => {
  const { id, status } = str ?? {};
  const [studentInfo, setStudentInfo] = useState({});
  const [studentLoading, setStudentLoading] = useState(false);

  useEffect(() => {
    setStudentLoading(true);
    fetch(`${config.base_url}/users/single?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudentInfo(data?.data);
        setStudentLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setStudentLoading(false);
      });
  }, [id]);

  return (
    <tr>
      {/* <td>{studentInfo?.firstName + " " + studentInfo?.lastName}</td> */}
      <td>
        {studentLoading
          ? "loading..."
          : studentInfo?.firstName + " " + studentInfo?.lastName}
      </td>
      <td>{studentLoading ? "loading..." : studentInfo?.email}</td>
      <td>{studentLoading ? "loading..." : status}</td>
    </tr>
  );
};

export default AttendenceHistoryTableBody;
