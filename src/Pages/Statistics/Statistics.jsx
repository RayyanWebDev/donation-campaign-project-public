import React from "react";
import PieCharts from "./PieCharts";
import data from ".././././././../../public/donation.json"; // Import your JSON data

const Statistics = () => {
  // Pass a specific item from the data array to the child component
  const selectedData = data[0]; // You can change the index to select a different object

  return (
    <div>
      <PieCharts selectedData={selectedData}></PieCharts>
    </div>
  );
};

export default Statistics;
