import React from "react";
import { useLoaderData } from "react-router-dom";
import { Question } from "../Question/Question";

export const Quiz = () => {
  const {
    data: { questions, name },
  } = useLoaderData();
  //   console.log(topic);
  return (
    <div className="p-5">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-medium md:font-semibold lg:font-bold text-center custom-font tracking-wider my-10">
        Quiz On <span className="text-info">{name}</span>
      </h1>
      <div className="flex flex-col justify-center mx-auto gap-5">
        {questions.map((question, index) => (
          <Question index={index} question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
};
