import React, { useEffect, useState } from "react";
import MaterialCard from "../../../../../components/cards/MaterialCard";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import config from "../../../../../config";

const ClassMaterials = ({ refetch }) => {
  const { classId, subjectId } = useParams();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetch(`${config.base_url}/subject/${subjectId}/material/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setMaterials(data?.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Something went wrong");
      });
  }, [subjectId, refetch]);

  return (
    <div className="space-y-5">
      <h2 className="mt-10 text-base font-semibold">Class Materials: </h2>
      <div className="flex flex-col gap-5">
        {materials?.length
          ? materials.map((material) => (
              <MaterialCard material={material} key={material?._id} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default ClassMaterials;
