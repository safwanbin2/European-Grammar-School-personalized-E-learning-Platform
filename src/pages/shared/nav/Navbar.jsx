import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { AuthContext } from "../../../contexts/AuthContext/AuthProvider";
import unknown from "../../../assets/unknown.png";

const Navbar = () => {
  const { user, userDB } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearchEnter = () => {
    if (searchText) {
      return navigate(`/productspage/${searchText}`);
    }
    navigate(`/productspage`);
  };

  // const ProfileDropdownMenu = (
  //   <div className="p-3">
  //     <h2>Welcome!</h2>

  //     <div>
  //       <p className="text-xl ">name</p>
  //       <Link className="text-primary" to="/myprofile">
  //         Profile
  //       </Link>
  //     </div>

  //     <div className="mt-2">
  //       <Link
  //         to="/login"
  //         className={`hover:bg-white hover:border-primary hover:text-primary bg-primary text-white border-transparent px-2 py-1 text-sm md:text-base hover:shadow-lg border  transition-all duration-300 w-full`}
  //       >
  //         Login / Register
  //       </Link>
  //     </div>

  //     <div className="divider my-2"></div>
  //     <div className="grid grid-cols-1 gap-1">
  //       <div>
  //         <Link to="/mywishlist">Wishlist</Link>
  //       </div>
  //       <div>
  //         <Link to="/myorders">Orders</Link>
  //       </div>
  //       <div>
  //         <Link to="/mycart">Cart</Link>
  //       </div>
  //     </div>
  //   </div>
  // );
  // inital commit to check
  const NavLinks = (
    <>
      {/* <li className="text-grey tracking-wider block md:hidden">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex bg-base-200 py-1 px-2 w-full gap-2 rounded-3xl"
        >
          {searchText ? (
            <Link
              type="submit"
              to={`/productspage/${searchText}`}
              className="rounded-3xl flex justify-center items-center"
            >
              <p className="text-2xl text-primary">
                <BiSearchAlt2 />
              </p>
            </Link>
          ) : (
            <Link
              type="submit"
              to={`/productspage`}
              className="rounded-3xl flex justify-center items-center"
            >
              <p className="text-2xl text-primary">
                <BiSearchAlt2 />
              </p>
            </Link>
          )}
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className=" outline-none bg-transparent rounded-full px-3 py-1 w-full"
            type="search"
            placeholder="Search for product"
          />
          <button className="hidden" onClick={handleSearchEnter} type="submit">
            search
          </button>
        </form>
      </li> */}
      <>
        <li className="text-gray-200 text-base dropdown dropdown-hover me-4 md:py-4 hover:text-primary transition-all duration-300">
          <Link
            to="/explore-profile"
            className="flex flex-col justify-center items-center gap-[2px]"
          >
            <p className="">Explore More</p>
          </Link>
        </li>
        <li className="text-gray-200 text-base dropdown dropdown-hover me-4 md:py-4 hover:text-primary transition-all duration-300">
          <Link
            to="/contact-me"
            className="flex flex-col justify-center items-center gap-[2px]"
          >
            <p className="">Contact</p>
          </Link>
        </li>
        {user && user?.uid ? (
          <>
            <li className="text-grey font-semibold dropdown dropdown-hover me-4 md:py-4">
              <Link
                to={`/dashboard/my-profile`}
                className="flex flex-col justify-center items-center gap-[2px]"
              >
                <p className=" text-primary">
                  <img
                    src={
                      userDB?.photo
                        ? userDB?.photo
                        : user?.photoURL
                        ? user?.photoURL
                        : unknown
                    }
                    className="size-10 rounded-full"
                    alt=""
                  />
                  {/* <BsPerson className="text-2xl" /> */}
                </p>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-gray-200 text-base dropdown dropdown-hover me-4 py-2">
              <Link
                to={"/login"}
                className="flex flex-col justify-center items-center gap-[2px] p-btn rounded-full"
              >
                <p className="">Login</p>
              </Link>
            </li>
          </>
        )}

        {/* <li className="text-grey dropdown dropdown-hover dropdown-end me-4 py-4 cursor-pointer hidden md:block">
          <label
            tabIndex={0}
            className="flex flex-col justify-center items-center gap-[1px]"
          >
            <p className="text-xl mt-[.5px] text-primary">
              <BsPerson />
            </p>
            <p className="text-xs font-semibold">Profile</p>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[100] menu p-2 shadow-md bg-base-100 mt-[18px] w-52 left-1/2 transform -translate-x-1/2"
          >
            {ProfileDropdownMenu}
          </div>
        </li> */}
      </>
    </>
  );

  return (
    <nav
      className={`bg-base-100 shadow-lg z-10 transition-all duration-500 w-full fixed top-0 left-0 `}
    >
      <div className={`${navbar ? "bg-base-100 shadow" : ""} py-2 md:py-0`}>
        <div className="justify-between w-11/12 mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
              <ul className="flex justify-center items-center space-x-4 md:space-x-8 md:space-y-0 tracking-wider">
                <li>
                  <Link
                    className="text-primary text-xl md:text-2xl uppercase font-bold"
                    to="/"
                  >
                    <h2 className="text-primary">Rating</h2>
                    {/* <img className='h-[32px]' src={m} alt="" /> */}
                  </Link>
                </li>
                {/* <li className="text-grey tracking-wider hidden md:block">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex bg-base-200 py-1 px-2 w-full gap-2 rounded-3xl"
                  >
                    {searchText ? (
                      <Link
                        type="submit"
                        to={`/productspage/${searchText}`}
                        className="rounded-3xl flex justify-center items-center"
                      >
                        <p className="text-2xl text-primary">
                          <BiSearchAlt2 />
                        </p>
                      </Link>
                    ) : (
                      <Link
                        type="submit"
                        to={`/productspage`}
                        className="rounded-3xl flex justify-center items-center"
                      >
                        <p className="text-2xl text-primary">
                          <BiSearchAlt2 />
                        </p>
                      </Link>
                    )}
                    <input
                      onChange={(e) => setSearchText(e.target.value)}
                      className=" outline-none bg-transparent rounded-full px-3 py-1 w-full"
                      type="search"
                      placeholder="Search for product"
                    />
                    <button
                      className="hidden"
                      onClick={handleSearchEnter}
                      type="submit"
                    >
                      search
                    </button>
                  </form>
                </li> */}
              </ul>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-200 rounded-md outline-none py-4"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-2 font-bold md:font-normal md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                className={`flex-col items-start justify-start md:flex-row md:items-center md:justify-center space-y-4 flex md:space-x-8 md:space-y-0 tracking-wider text-sm`}
              >
                {NavLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
