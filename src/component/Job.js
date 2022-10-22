import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Job({ n }) {
   
  return (
    <div>
      <div className="flex  justify-between mt-6 items-center">
        <div className=" flex flex-col">
          <span className="font-bold">{n.name}</span>
          <span>{n.username}</span>
          <div className="space-x-2 flex">
            <span>{n.website}</span>
            <div>|</div>
            <span>NEW</span>
          </div>
        </div>
        <Link to={`/f/${n.id}`}>
          <FontAwesomeIcon icon={faRightLeft} />
        </Link>
      </div>
      <div className="border border-gray-700 mt-3"></div>
    </div>
  );
}
