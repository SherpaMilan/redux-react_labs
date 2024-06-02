

import React from "react";
import { useSelector } from "react-redux";

const DivPanel = () => {
  // The useSelector hook allows you to extract data from the Redux store state.
  let counterVal = useSelector((state) => state.counter);
  return <div>The present value of the counter is {counterVal}</div>;
};

export default DivPanel;
