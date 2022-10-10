import React from "react";
import parse from "html-react-parser";

export const Question = ({
  question: { question, options, correctAnswer },
  index,
}) => {
  const questionElement = parse(question);
  console.log(options, correctAnswer);
  //   console.log(question);
  return (
    <div>
      <span className="flex gap-2">
        Q{index + 1}
        {"."}
        {questionElement}
      </span>
    </div>
  );
};
