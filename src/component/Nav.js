import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMessage,
  faBell,
  faTriangleCircleSquare,
  faWallet,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// import img1 from "../component/logo-header.png"

const Nav = () => {
  const [mobile, setmobile] = useState(false);

  return (
    <div className="nav lg:bg-[#f4f5f8] bg-white   flex justify-between sticky top-0   p-4  h-24 items-center shadow-md">
      <div className="icons  flex items-center space-x-8">
        <div className="BUTTON z-10" onClick={() => setmobile(!mobile)}>
          {!mobile ? (
            <FontAwesomeIcon icon={faBars} className="text-2xl z-10 " />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-2xl  " />
          )}
        </div>
        <div className="wel">Welcome</div>
      </div>
      {/* <div className="we">Welcome</div> */}
      <div>
        <div className="border border-gray-300"></div>
        <ul
          className={
            !mobile
              ? "hidden"
              : "ul_name absolute  lg:block  w-1/2 lg:w-1/6 top-0 left-0 h-[100vh] flex justify-between bg-white  "
          }
        >
          <div className="list mt-28 p-2 text-xl space-y-10 w-full">
            <Link to="/d">
              <div className=" flex space-x-9 hover:bg-sky-500 p-2  hover:ring-sky-500">
                <FontAwesomeIcon icon={faBagShopping} />
                <span>Dashboard</span>
              </div>
            </Link>

            <Link to="/h">
              <div className=" flex space-x-9 ">
                <FontAwesomeIcon icon={faBagShopping} />
                <span>Myjob</span>
              </div>
            </Link>

            <Link  to="/j">
            <div className=" flex space-x-9">
              <FontAwesomeIcon icon={faBagShopping} />
              <span>Engeged</span>
            </div>
            </Link>
            <div className=" flex space-x-9">
              <FontAwesomeIcon icon={faBagShopping} />
              <span>Dashboard</span>
            </div>
            <div className=" flex space-x-9">
              <FontAwesomeIcon icon={faBagShopping} />
              <span>Dashboard</span>
            </div>
          </div>
          {/* <div className="top-0">
            <img  src={img1}/>
        </div> */}
        </ul>
      </div>

      {/* <div className="wel">Welcome</div> */}
      <div className="lg:block hidden">
        <div className="nav_button   border border-gray-300 items-center  rounded-full  flex justify-between w-80  bg-gray-200 space-x-4">
          <h4 className="pl-4">You're Club member</h4>
          <div className="nav_button_2  border text-white border-green-700 rounded-full bg-green-500 px-6 p-2 ">
            <p>upgrade</p>
          </div>
        </div>
      </div>
      <div className="nav_icons  flex items-center space-x-6  text-2xl">
        <FontAwesomeIcon icon={faMessage} />
        <FontAwesomeIcon icon={faBell} />
      </div>

      <div className="nav_icons  flex items-center space-x-6  text-2xl">
        <FontAwesomeIcon icon={faTriangleCircleSquare} />
        <FontAwesomeIcon icon={faWallet} />
      </div>
    </div>
  );
};

export default Nav;
