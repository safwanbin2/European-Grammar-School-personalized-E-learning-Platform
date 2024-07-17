import React, { useState } from "react";
import AddClassWorkForm from "./AddClassWorkForm";
import ClassWorkCard from "../../../../../../components/cards/ClassWorkCard";

const ClassWork = () => {
  const [classWorks, setClassWorks] = useState([
    {
      _id: 1,
      classId: "c1",
      subjectId: "s1",
      classTitle: "class 7",
      subjectTitle: "Maths",
      instructionText:
        "sd shiosd ohsd oushd iohds soiioh oih oih ioh iohio ho h ihsodh  sd",
      instructionFile: "www.file.com",
      teacherEmail: "www.teacher@gmail.com",
      date: "2323-23-23",
      submissionDate: "2323-23-23",
    },
    {
      _id: 2,
      classId: "c1",
      subjectId: "s1",
      classTitle: "class 7",
      subjectTitle: "Maths",
      instructionText:
        "sd shiosd ohsd oushd iohds soiioh oih oih ioh iohio ho h ihsodh  sd",
      instructionFile: "www.file.com",
      teacherEmail: "www.teacher@gmail.com",
      date: "2323-23-23",
      submissionDate: "2323-23-23",
    },
    {
      _id: 3,
      classId: "c1",
      subjectId: "s1",
      classTitle: "class 7",
      subjectTitle: "Maths",
      instructionText:
        "sd shiosd ohsd oushd iohds soiioh oih oih ioh iohio ho h ihsodh  sd",
      teacherEmail: "www.teacher@gmail.com",
      date: "2323-23-23",
      submissionDate: "2323-23-23",
    },
  ]);
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-base font-semibold">Class Work: </h2>
      </div>
      <AddClassWorkForm />

      <div className="flex flex-col gap-5">
        {classWorks?.length
          ? classWorks.map((classWork) => (
              <ClassWorkCard classWork={classWork} key={classWork?._id} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default ClassWork;
