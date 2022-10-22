import React, { useEffect, useState } from "react";
// import Nav from "./Nav";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Engged from "../component/Engged"
import Nav from "./Nav";

const Engaged = () => {
  const [data2, setdata2] = useState();

  useEffect(() => {
    const fetch = async() => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setdata2(data?.data);

      console.log(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="MainMyjob">
        <Nav/>
        <div className="main  pt-5 lg:px-20 px-5 mt-10   ">
          <div className="my_work  w-full lg:w-[70%]">
            <div className=" w-full flex justify-between items-center gap-10   ">
              <h1 className="w-32 text-3xl">Engaged</h1>
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
data2?.map((y  , index)=>{

return <Engged y= {y} />
})

            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engaged;
