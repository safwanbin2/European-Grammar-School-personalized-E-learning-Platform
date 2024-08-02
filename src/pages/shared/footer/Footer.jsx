import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full pt-14 flex items-center justify-center">
      <div className="w-full flex flex-col">
        <div className="flex flex-col">
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
