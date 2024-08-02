import homeBanner from "../../../assets/homeBanner.png";
import Footer from "../../shared/footer/Footer";

const DashboardHome = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold">Welcome to</h2>
        {/* <p className="text-xl font-semibold">
          European Grammar School personalized E-learning Platform
        </p> */}
        <img src={homeBanner} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardHome;
