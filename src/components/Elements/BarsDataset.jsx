import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const BarsDataset = (props) => {
  const { dataset } = props;

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "date" }]}
      series={[
        { dataKey: "amountThisWeek", label: "This Week", color: "#299D91" },
        { dataKey: "amountLastWeek", label: "Last Week", color: "#E8E8E8" },
      ]}
      height={220}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      slotProps={{ legend: { hidden: true } }}
    />
  );
};

export default BarsDataset;