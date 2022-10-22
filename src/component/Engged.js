import React from "react";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Engged2 = ({ y }) => {
  return (
    <div>
      <div className="bg-white shadow-md w-full  p-3" >
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
            <span>INR(₹) 57600</span>
            <FontAwesomeIcon icon={faRightLeft} />
          </div>
        </div>

        <div className="capitilize mt-6">● Last Active 9 days ago</div>
      </div>
    </div>
  );
};

export default Engged2;
