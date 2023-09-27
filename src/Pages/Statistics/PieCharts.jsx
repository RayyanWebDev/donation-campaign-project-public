import React from "react";
import { PieChart, Pie } from "recharts";

const PieCharts = ({ selectedData }) => {
  const {
    id,
    Picture,
    Title,
    Category,
    Color_for_category_bg,
    Color_for_card_bg,
    Color_for_text,
    Description,
    Price,
  } = selectedData || {};

  return (
    <div>
      <div>Piechart</div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={[{ name: "Price", value: Price }]} // Pass the Price as an object in an array
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
};

export default PieCharts;
