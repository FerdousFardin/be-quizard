import React from "react";
import parse from "html-react-parser";
import { Option } from "../Option/Option";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Question = ({
  question: { question, options, correctAnswer },
  index,
}) => {
  const showAnswer = () =>
    toast.info(correctAnswer, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  const questionElement = parse(question);
  return (
    <div className="card shadow-xl p-5 bg-base-200">
      <div className="flex justify-between">
        <span className="flex gap-2 text-xl md:text-2xl font-medium">
          Q{index + 1 + "."}
          {questionElement}
        </span>
        <button onClick={showAnswer} className="active:scale-90">
          <EyeIcon className="w-6 h-6"></EyeIcon>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-5 my-3">
        {options.map((option, idx) => (
          <Option correctAnswer={correctAnswer} option={option} key={idx} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
