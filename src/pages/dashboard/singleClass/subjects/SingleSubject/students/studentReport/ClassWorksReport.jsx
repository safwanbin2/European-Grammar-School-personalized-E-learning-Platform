import React from "react";

const ClassWorksReport = ({ classWorks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Assign Date</th>
            <th>Submission Date</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {classWorks?.length
            ? classWorks?.map((cw, i) => (
                <tr key={i} cw={cw}>
                  <th>{i + 1}</th>
                  <td>{cw?.submissionDate}</td>
                  <td>{cw?.date?.slice(0, 10)}</td>
                  <td>{cw?.instructionText}</td>
                  <td>{cw?.submissionText}</td>
                  <td>{cw?.mark ? cw?.mark : "pending"}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default ClassWorksReport;
