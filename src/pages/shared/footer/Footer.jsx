import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full pt-14 flex items-center justify-center">
      <div className="w-full flex flex-col">
        <hr className="border-gray-600" />
        <div className="w-full text-6xl font-bold mt-12">
          <h1 className="w-full md:w-2/3">WHO ARE WE?</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            EGS is an English Medium School established in the year 2003.
            Presently the school is imparting education to students in EDEXCEL
            and National Curriculumn (English Version).
          </p>
          {/* <p className="w-full md:w-2/3 text-gray-400">
            Enhance your knowledge and learning abilities by utilizing EGSPEP
            (European Grammar School personalized E-learning Platform)
          </p> */}
          <div className=" pt-6 md:pt-0">
            <Link to={"/dashboard/classes"} className="p-btn">
              View Classes
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-10 mb-12 flex-col md:flex-row justify-start gap-2 md:gap-20">
            <Link to={"/dashboard"} className="text-2xl text-primary">
              Home
            </Link>
            <Link to={"/dashboard/classes"} className="text-xl ">
              Classes
            </Link>
            <Link to={"/dashboard/my-profile"} className="text-xl ">
              Profile
            </Link>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center mt-20 text-gray-600">
            Copyright © 2024 EGSPEP - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
