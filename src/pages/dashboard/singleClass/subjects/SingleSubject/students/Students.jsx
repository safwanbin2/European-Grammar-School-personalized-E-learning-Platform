import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../../../../../config";
import { toast } from "sonner";

const Students = () => {
  const { subjectId } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${config.base_url}/subject/${subjectId}/students`)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setStudents(data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Something went wrong");
        setLoading(false);
      });
  }, [subjectId]);

  return (
    <div>
      <h2 className="font-semibold">Students: </h2>
      <div className="overflow-x-auto">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {students?.length
                ? students?.map((student, i) => (
                    <tr key={i} student={student}>
                      <th>{i + 1}</th>
                      <td>{student?.email}</td>
                      <td>{student?.role}</td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Students;
