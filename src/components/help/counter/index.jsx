import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div>
      <CountUp duration={6} end={number} />
    </div>
  );
}