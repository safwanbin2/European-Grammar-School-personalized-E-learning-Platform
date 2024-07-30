import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import config from "../../config";
import { toast } from "sonner";

const AcceptInvite = () => {
  const { classId, subjectId, email, role } = useParams();
  const navigate = useNavigate();
  const [subject, setSubject] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!/^[a-fA-F0-9]{24}$/.test(classId)) {
      console.log("Invalid classId");
      navigate("/");
      return;
    }

    if (!/^[a-fA-F0-9]{24}$/.test(subjectId)) {
      console.log("Invalid subjectId");
      navigate("/");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email address");
      navigate("/");
      return;
    }
  }, [classId, subjectId, email, navigate]);

  useEffect(() => {
    setLoading(true);
    fetch(`${config.base_url}/subject/single/${subjectId}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setSubject(data?.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      });
  }, [subjectId]);

  const handleAccept = async () => {
    setLoading(true);
    const data = {
      classId,
      subjectId,
      classTitle: subject?.classTitle,
      subjectTitle: subject?.subjectTitle,
      email,
      role,
    };
    fetch(`${config.base_url}/accept-invitation`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.success) {
          throw new Error(data?.message);
        }
        toast.success(data?.message || "Invitation accepted successfully");
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
        setLoading(false);
        navigate("/");
      });
  };

  return (
    <div className="flex gap-4 justify-center items-center min-h-screen">
      {loading ? (
        <>
          <button
            disabled
            className="py-2 px-4 rounded-sm shadow-sm bg-base-300 text-black"
          >
            Reject
          </button>
          <button
            disabled
            className="py-2 px-4 rounded-sm shadow-sm bg-base-300 text-black"
          >
            Accept
          </button>
        </>
      ) : (
        <>
          <Link
            to="/"
            className="py-2 px-4 rounded-sm shadow-sm bg-red-600 text-white"
          >
            Reject
          </Link>
          <button
            className="py-2 px-4 rounded-sm shadow-sm bg-green-600 text-white"
            onClick={handleAccept}
          >
            Accept
          </button>
        </>
      )}
    </div>
  );
};

export default AcceptInvite;
