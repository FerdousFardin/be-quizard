import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export const TopicDetails = ({ topic: { id, name, total, logo } }) => {
  return (
    <div className="card card-compact bg-[rgba(170,170,170,0.5)] shadow-xl">
      <figure>
        <img
          className="bg-[rgba(170,170,170,0.9)] rounded"
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title md:text-2xl lg:text-3xl">{name}</h2>
        <p className="lg:text-xl">
          Total Questions: <strong>{total}</strong>
        </p>
        <div className="card-actions justify-end">
          <button className="btn">
            Start Practice <ArrowSmallRightIcon className="h-6 w-6 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
