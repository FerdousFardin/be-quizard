import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

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
        <h2 className="card-title md:text-2xl lg:text-3xl custom-font tracking-wide">
          {name}
        </h2>
        <p className="lg:text-xl">
          Total Questions: <strong>{total}</strong>
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/topics/${id}`}
            className="btn md:text-lg lg:text-xl custom-font tracking-wider w-full"
          >
            Start Practice <ArrowSmallRightIcon className="h-6 w-6 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
