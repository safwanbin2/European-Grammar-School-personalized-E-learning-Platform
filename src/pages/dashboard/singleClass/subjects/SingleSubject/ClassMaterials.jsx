import React, { useState } from "react";
import MaterialCard from "../../../../../components/cards/MaterialCard";

const ClassMaterials = () => {
  const [materials, setMaterials] = useState([
    {
      _id: 1,
      classId: "c1",
      subjectId: "s1",
      classTitle: "class 7",
      subjectTitle: "Maths",
      materialText:
        "sd shiosd ohsd oushd iohds soiioh oih oih ioh iohio ho h ihsodh  sd",
      materialFile: "www.file.com",
      teacherEmail: "www.teacher@gmail.com",
      date: "2323-23-23",
    },
    {
      _id: 2,
      classId: "c1",
      subjectId: "s1",
      classTitle: "class 7",
      subjectTitle: "Maths",
      materialText:
        "sd shiosd ohsd oushd iohds soiioh oih oih ioh iohio ho h ihsodh  sd",
      materialFile: "www.file.com",
      teacherEmail: "www.teacher@gmail.com",
      date: "2323-23-23",
    },
    {
      _id: 3,
      classId: "c1",
      subjectId: "s1",
      classTitle: "class 7",
      subjectTitle: "Maths",
      materialText:
        "sd shiosd ohsd oushd iohds soiioh oih oih ioh iohio ho h ihsodh  sd",
      materialFile: "www.file.com",
      teacherEmail: "www.teacher@gmail.com",
      date: "2323-23-23",
    },
  ]);
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
