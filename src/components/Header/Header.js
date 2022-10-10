import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="navbar bg-info text-slate-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl md:text-2xl lg:text-4xl custom-font">
          BeQuizard
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/topics"}>Topics</Link>
          </li>
          <li>
            <Link to={"/statistics"}>Statistics</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
