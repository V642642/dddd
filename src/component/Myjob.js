import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Myjob = () => {
  const [f, setf] = useState();
  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setf(data));
      console.log(data)
  }, []);

  return (
    <div className="MainMyjob">
      <Nav />
      <div className="main  pt-5 lg:px-20 px-5 mt-10   ">
        <div className="my_work  w-full lg:w-[70%]">
          <div className=" w-full flex justify-between items-center gap-10   ">
            <h1 className="w-32 text-3xl">My work</h1>
            <input
              type="text"
              className="w-[60%] p-2 border border-gray-400"
              placeholder="Search by job and jobs"
            />
            <FontAwesomeIcon icon={faRightLeft} />
          </div>

          <div className="buttons mt-4 flex items-center gap-3 flex-wrap text-sm w-full">
            <div className="bg-green-500 p-1 w-32 text-white rounded-full text-center">
              Allocate(77)
            </div>
            <div className="bg-white p-1 w-32 text-green-500 border border-green-500 rounded-full text-center">
              unAllocate(77)
            </div>
            <div className="bg-white p-1 w-32 text-green-500 border border-green-500 rounded-full text-center">
              DeAllocate(77)
            </div>
            <div className="bg-white p-1 w-32 text-green-500 border border-green-500 rounded-full text-center">
              Engaged(77)
            </div>
            <div className="bg-white p-1 px-3 w-38 text-green-500 border border-green-500 rounded-full text-center">
              Previous jobs(77)
            </div>
            <div className="bg-white p-1 w-32 text-green-500 border border-green-500 rounded-full text-center">
              Premium(77)
            </div>
            <div className="bg-white p-1 w-32 text-green-500 border border-green-500 rounded-full text-center">
              favourite(77)
            </div>
            <div className="bg-white p-1 w-32 text-green-500 border border-green-500 rounded-full text-center">
              All jobs(77)
            </div>
          </div>

          <div className="boxes mt-7 space-y-7">
           {
f?.map((y)=>{
  console.log(y)
return   <div className="bg-white shadow-md w-full  p-3">
<div className="flex justify-between items-center">
  <div className="w-1/3 flex justify-between">
    <span>Manager- Business development</span>
    <span className="text-green-500">{y.name}</span>
  </div>
  <div className="w-1/3 flex justify-between items-center">
    <FontAwesomeIcon icon={faRightLeft} />
    <span className="text-green-500">New</span>
  </div>
</div>

<div className="flex justify-between mt-10 items-baseline">
  <div className="flex flex-col space-y-3">
    <span>{y.username}</span>
    <span>At Multiple</span>
  </div>

  <div className="flex flex-col space-y-6">
    <span>INR(???) 57600</span>
    <FontAwesomeIcon icon={faRightLeft} />
  </div>
</div>

<div className="capitilize mt-6">??? Last Active 9 days ago</div>
</div>



})

           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myjob;
