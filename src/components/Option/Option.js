import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { toast } from "react-toastify";

export const Option = ({ option, correctAnswer }) => {
  const [optionStyle, setOptionStyle] = useState("border-neutral");
  const validateAnswer = (answer) => {
    setOptionStyle("border-neutral");
    const validation = answer === correctAnswer;
    const toastType = validation ? toast.success : toast.error;
    const text = validation ? "You are correct!" : "You are wrong!";
    setOptionStyle(
      validation ? "border-success text-success" : "border-error text-error"
    );
    toastType(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <button
        onClick={() => validateAnswer(option)}
        className={`border-2 ${optionStyle} p-4 rounded text-lg lg:text-xl flex items-center gap-2`}
      >
        <CheckCircleIcon className="w-6 h-6" />
        {option}
      </button>
    </>
  );
};
