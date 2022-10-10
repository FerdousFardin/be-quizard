import React from "react";
import { useLoaderData } from "react-router-dom";
import { Hero } from "../Hero/Hero";
import { TopicDetails } from "../TopicDetails/TopicDetails";

export const Topic = () => {
  const { data: topics } = useLoaderData();
  console.log(topics);
  return (
    <>
      <Hero />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5 mx-10 py-10">
        {topics.map((topic) => (
          <TopicDetails topic={topic} key={topic.id} />
        ))}
      </div>
    </>
  );
};
