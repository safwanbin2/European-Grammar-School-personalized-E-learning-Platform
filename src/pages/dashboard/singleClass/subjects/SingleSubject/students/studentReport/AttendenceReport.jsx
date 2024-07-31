import React from "react";

const AttendenceReport = ({ attendence }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Date</th>
            <th>Presence</th>
          </tr>
        </thead>
        <tbody>
          {attendence?.length
            ? attendence?.map((att, i) => (
                <tr key={i} att={att}>
                  <th>{i + 1}</th>
                  <td>{att?.date}</td>
                  <td>{att?.status}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default AttendenceReport;
