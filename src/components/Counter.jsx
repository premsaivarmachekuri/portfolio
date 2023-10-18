import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="space-y-3">
      <CountUp duration={10} className="text-green-300 text-6xl" end={number} /><span  className="text-green-300 text-6xl">+</span>
      <h1 className="text-md text-white mx-3">{title}</h1>
    </div>
  );
}
