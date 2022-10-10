import React from "react";
import parse from "html-react-parser";
import { Option } from "../Option/Option";
import { EyeIcon } from "@heroicons/react/24/solid";

export const Question = ({
  question: { question, options, correctAnswer },
  index,
}) => {
  const questionElement = parse(question);
  //   console.log(question);
  return (
    <div className="card shadow-xl p-5 bg-base-200">
      <div className="flex justify-between">
        <span className="flex gap-2 text-xl md:text-2xl font-medium">
          Q{index + 1 + "."}
          {questionElement}
        </span>
        <button className="active:scale-90">
          <EyeIcon className="w-6 h-6"></EyeIcon>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-5 my-3">
        {options.map((option, idx) => (
          <Option option={option} key={idx} />
        ))}
      </div>
    </div>
  );
};
