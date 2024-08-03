import { Link } from "react-router-dom";
import homeBanner from "../../../assets/homeBanner.png";
import Footer from "../../shared/footer/Footer";
import StudentsBanner from "./StudentsBanner";
import TeachersBanner from "./TeachersBanner";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";

const DashboardHome = () => {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-semibold">Welcome to</h2>
        {/* <p className="text-xl font-semibold">
          European Grammar School personalized E-learning Platform
        </p> */}
        <img src={homeBanner} alt="" />
      </div>
      <div>
        <hr className="border-gray-600" />
        <div className="w-full text-6xl font-bold mt-12">
          <h1 className="w-full md:w-2/3">WHO ARE WE?</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between gap-10 items-center">
          <p className="w-full md:w-2/3 text-gray-400">
            EGS is an English Medium School established in the year 2003.
            Presently the school is imparting education to students in EDEXCEL
            and & Cambridge English version.
          </p>
          {/* <p className="w-full md:w-2/3 text-gray-400">
            Enhance your knowledge and learning abilities by utilizing EGSPEP
            (European Grammar School personalized E-learning Platform)
          </p> */}
          <div className="pt-6 md:pt-0 flex flex-col gap-5">
            {/* <Link to={"/dashboard/classes"} className="p-btn">
              View Classes
            </Link> */}
            <div className="flex items-center gap-2">
              <IoMailOpenOutline className="text-2xl text-primary" />
              <p className="text-gray-500">
                europeangrammarschool2063@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CiPhone className="text-2xl text-primary" />
              <p className="text-gray-500">+8801558129694</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineLocationOn className="text-3xl text-primary" />
              <p className="text-gray-500">
                House 45,Road no 4,O.R Nizam Road,Chittagong, Bangladesh
              </p>
            </div>
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
        </div>
      </div>
      <TeachersBanner />
      <StudentsBanner />
      <Footer />
    </div>
  );
};

export default DashboardHome;
