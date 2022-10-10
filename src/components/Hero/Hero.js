import React from "react";
import "./Hero.module.css";

export const Hero = () => {
  return (
    <header className="container flex flex-col justify-center items-center h-[50vh] text-center text-base-300 bg-[url('https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-124783.jpg?w=1060&t=st=1665426014~exp=1665426614~hmac=0595704965c8000fd091bb919d8bd72f51f9fa7281829f81170f96440a125394')] bg-gray-400	bg-blend-multiply bg-no-repeat bg-cover">
      <h1 className="text-xl md:text-2xl lg:text-5xl font-bold custom-font tracking-wide text-info my-4">
        <span className="uppercase text-accent">
          test your front-end skills with
        </span>{" "}
        BeQuizard
      </h1>
      <p className="custom-font text-lg md:text-xl lg:text-2xl font-md tracking-wide">
        These test are designed to assess your technical knowledge in
        <span className="badge badge-success rounded-sm badge-outline px-1 mx-1 badge-lg">
          CSS
        </span>
        ,
        <span className="badge badge-success rounded-sm badge-outline px-1  mx-1 badge-lg">
          JavaScript
        </span>
        and
        <span className="badge badge-success rounded-sm badge-outline px-1  mx-1 badge-lg">
          React
        </span>
        as an junior Front-End Developer.
      </p>
    </header>
  );
};
