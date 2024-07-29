import React, { useEffect, useState } from "react";
import config from "../../config";

const AttendenceHistoryTableBody = ({ str, key }) => {
  const { id, status } = str ?? {};
  const [studentInfo, setStudentInfo] = useState({});

  useEffect(() => {
    fetch(`${config.base_url}/users/single?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudentInfo(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <tr>
      <td>{studentInfo?.firstName + " " + studentInfo?.lastName}</td>
      <td>{studentInfo?.email}</td>
      <td>{status}</td>
    </tr>
  );
};

export default AttendenceHistoryTableBody;
