import React, { useEffect, useState } from "react";
import Nav from "./Nav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import img1 from "../component/kela.png";
// import { Link } from "react-router-dom";
import Job from "./Job";

const Dashboard = () => {
  const [s, sets] = useState();

  useEffect(() => {
    const fetchdata = () => {
      const data = fetch("https://jsonplaceholder.typicode.com/users").then(
        (res) => res.json().then((data) => sets(data))
      );
    };

    fetchdata();
  }, []);
  console.log(s, "lkllkk");

  return (
    <div>
      <Nav />

      <div className="dashboard lg:p-16   p-3 px-3 ">
        <div className="dashboard  flex justify-between w-2/3 items-center ">
          <h1 className="text-4xl">Dashboard</h1>
          <span>Your Rating is 5</span>
        </div>

        <div className="dashboard_2 w-full mt-7 flex gap-6 flex-col lg:flex-row ">
          <div className="lg:w-[75%] w-full text-sm lg:text-lg">
            <div className="w-full bg-white shadow-lg rounded-lg  p-4 space-y-3   ">
              <div className="flex flex-col ">
                <span>Status of Candidates</span>
                <span className=" lg:w-1/3  w-full  bg-green-500 h-3  text-green-500  rounded-full ">
                  1
                </span>
              </div>

              <div className="flex flex-col">
                <span>38 shorlisted</span>
                <span className="lg:w-1/12 w-full bg-green-500 h-3  text-green-500  rounded-full ">
                  1
                </span>
              </div>

              <div className="flex flex-col">
                <span>3 OnHold</span>
                <span className="w-full  bg-green-500 h-3  text-green-500  rounded-full ">
                  1
                </span>
              </div>
              <div className="flex flex-col">
                <span>8 Proposed</span>
                <span className="w-[5%] bg-green-500 h-3  text-green-500  rounded-full ">
                  1
                </span>
              </div>

              <div className="flex flex-col">
                <span>2 Hired</span>
                <span className="w-full  bg-green-500 h-3  text-green-500  rounded-full ">
                  1
                </span>
              </div>
              <div className="flex flex-col">
                <span>396 Reject</span>
                <span className="w-[10%]  bg-green-500 h-3  text-green-500  rounded-full ">
                  1
                </span>
              </div>
              <div className="flex flex-col">
                <span>8 Viewed</span>
                <span className="w-[6%]  bg-green-500 h-3  text-green-500  rounded-full ">
                  1
                </span>
              </div>
              <div className="flex flex-col">
                <span>4 InProcess</span>
                <span className="w-[3%] bg-green-500 h-3  text-green-500  rounded-full ">
                  1
                </span>
              </div>
            </div>

            <div className="dashboard_2   bg-white shadow-md mt-6 p-5  rounded-md  ">
              <div>Since your last visit 1 hour(s) ago</div>
              <div className="dashboard_box  flex  gap-4  mt-4 ">
                <div className="boxes border border-green-600  w-[25%] rounded-md ">
                  <div className="flex flex-col items-center lg:p-8    p-2">
                    <span>0</span>
                    <span>New jobs posted</span>
                  </div>
                </div>

                <div className="boxes border border-green-600  w-[25%] rounded-md ">
                  <div className="flex flex-col items-center lg:p-8  p-2">
                    <span>0</span>
                    <span>Upcoming interviews</span>
                  </div>
                </div>

                <div className="boxes border border-green-600  w-[25%] rounded-md">
                  <div className="flex flex-col items-center lg:p-8  p-2">
                    <span>0</span>
                    <span>New jobs posted</span>
                  </div>
                </div>

                <div className="boxes border border-green-600  w-[25%] rounded-md ">
                  <div className="flex flex-col items-center lg:p-8  p-2">
                    <span>0</span>
                    <span>Candidates in your databank</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard_2   bg-white shadow-md mt-6   p-2 rounded-md  ">
              <div>your sight</div>
              <div className="dashboard_box  flex  gap-4  mt-4 ">
                <div className="boxes border border-green-600  w-[25%] rounded-md ">
                  <div className="flex flex-col items-center lg:p-8  p-2">
                    <span>0</span>
                    <span>New jobs posted</span>
                  </div>
                </div>

                <div className="boxes border border-green-600  w-[25%] rounded-md ">
                  <div className="flex flex-col items-center lg:p-8  p-2">
                    <span>0</span>
                    <span>Upcoming interviews</span>
                  </div>
                </div>

                <div className="boxes border border-green-600  w-[25%] rounded-md">
                  <div className="flex flex-col items-center lg:p-8  p-2">
                    <span>0</span>
                    <span>New jobs posted</span>
                  </div>
                </div>

                <div className="boxes border border-green-600  w-[25%] rounded-md ">
                  <div className="flex flex-col items-center lg:p-8  p-2">
                    <span>0</span>
                    <span>Candidates in your databank</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 text-xl text-gray-400">
              Browser <span className="text-green-500">56 allocated</span> and
              15 other (unallocated) Jobs on{" "}
              <span className="text-green-500">this page.</span>
            </div>

            <div className="job_details bg-white mt-7 p-5 rounded">
              <div className="">Jobs that needs your attention</div>

              <div className="job_details_bannner bg-gray-300 p-1 mt-5">
                <div className="flex w-1/2 justify-between  text-lg px-1">
                  <span>job</span>
                  <span>Status</span>
                </div>
              </div>

              {s?.map((n, index) => {
                // console.log(s)
                return <Job n={n} key={index} />;
              })}
            </div>
          </div>

          <div className="lg:w-[25%]  w-full">
            <div className="bg-white    shadow-lg ">
              <div className="left_item  flex flex-col items-center justify-center  space-y-5 p-2 ">
                <span className="font-bold">Add Users</span>
                <span>up to 10 users</span>
                <button className="bg-green-500  text-white p-1 px-3 rounded-md">
                  Add to button
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg mt-4 h-28 ">
              <div className="left_item  flex flex-col items-center justify-center  space-y-5 p-2 ">
                <span> Invite An Employer</span>
                <button className="bg-green-500  text-white p-1 px-3 rounded-md">
                  invite
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg mt-4 p-4 rounded-md ">
              <img src={img1} className="lg:w-full w-[100%] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
