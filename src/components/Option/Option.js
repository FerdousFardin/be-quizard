import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { toast } from "react-toastify";

export const Option = ({ option, correctAnswer, index }) => {
  const [optionStyle, setOptionStyle] = useState("neutral");
  const validateAnswer = (answer) => {
    const validation = answer === correctAnswer;
    const toastType = validation ? toast.success : toast.error;
    const text = validation ? "You are correct!" : "You are wrong!";
    setOptionStyle(validation ? "success" : "error");
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
  // console.log(`option-${index}`, option);
  return (
    <div
      onClick={() => validateAnswer(option)}
      // onBlur={() => setOptionStyle("neutral")}
      className={`flex items-center gap-2 border-2 border-${optionStyle} text-${optionStyle} duration-300 ease-linear p-4 rounded text-lg lg:text-xl`}
    >
      <input
        type="radio"
        className={`radio radio-sm checked:bg-${
          optionStyle === "success"
            ? optionStyle
            : optionStyle === "neutral"
            ? "primary"
            : "[#e74c3c]"
        } duration-300 ease-linear`}
        name={`option-${index}`}
        id={option}
      />
      <label className="" htmlFor={option}>
        {option}
      </label>
    </div>
  );
};
