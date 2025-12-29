import React from "react";
import Card from "../Elements/Card";
import { expensesStatistics } from "../../data";
import BarsDataset from "../Elements/BarsDataset";

const CardStatistic = () => {
  return (
    <Card
      title="Statistics"
      desc={
        <div className="h-72">
          <select className="font-bold text-lg mb-4 focus:outline-none bg-transparent">
            <option>Weekly Comparison</option>
          </select>
          {/* Memasukkan element BarsDataset sesuai instruksi hal. 49 */}
          <BarsDataset dataset={expensesStatistics} />
        </div>
      }
    />
  );
};

export default CardStatistic;