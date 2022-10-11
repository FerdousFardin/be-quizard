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
        <ul className="hidden lg:menu lg:menu-horizontal p-0 text-xl font-semibold">
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
        <div className="lg:hidden md:text-lg md:font-medium dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-info rounded-box w-52"
          >
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
    </div>
  );
};
