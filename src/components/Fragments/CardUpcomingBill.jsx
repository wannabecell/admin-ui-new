import React from "react";
import Card from "../Elements/Card";
import { bills } from "../../data";

const CardUpcomingBill = () => {
  return (
    <Card
      title="Upcoming Bill"
      link="/bill"
      desc={
        <div className="space-y-4">
          {bills.map((bill) => (
            <div key={bill.id} className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="bg-gray-100 px-3 py-1 rounded-lg text-center">
                  <p className="text-xs text-gray-500">{bill.month}</p>
                  <p className="text-lg font-bold">{bill.date}</p>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        {bill.icon}
                        <p className="text-sm font-bold">{bill.name}</p>
                    </div>
                  <p className="text-xs text-gray-500">Last Charge: {bill.lastCharge}</p>
                </div>
              </div>
              <p className="text-sm font-bold bg-gray-100 px-3 py-1 rounded-full">${bill.amount}</p>
            </div>
          ))}
        </div>
      }
    />
  );
};

export default CardUpcomingBill;