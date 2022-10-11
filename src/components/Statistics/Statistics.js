import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Statistics = () => {
  const { data: topics } = useLoaderData();
  return (
    <>
      <h1 className="custom-font tracking-wider text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold text-center my-10">
        Here's a question statistics of our{" "}
        <span className="text-info">Front-End</span> Program
      </h1>
      <ResponsiveContainer width="95%" height={400}>
        <LineChart
          className="custom-font tracking-wider"
          data={topics}
          margin={{ top: 30, right: 20, bottom: 5, left: 20 }}
        >
          <Line type="monotone" dataKey="total" stroke="#3abff8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="7.5 7.5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
/*
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

const renderLineChart = (
  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);
*/
