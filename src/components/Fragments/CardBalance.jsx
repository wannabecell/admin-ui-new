import React from "react";
import Card from "../Elements/Card";
import DotsMobileStepper from "../Elements/DotsMobileStepper";
import { Link } from "react-router-dom";
import Icon from "../Elements/Icon";

function CardBalance(props) {
  const { data } = props; // Menangkap data dari dashboard.jsx

  return (
    <Card
      title="Total Balance"
      desc={
        <DotsMobileStepper
          data={data.map((item) => (
            <div key={item.id} className="p-2">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                  ${item.balance.toLocaleString()}
                </div>
                <div>
                  <Link to="/balance" className="text-xs text-gray-400 hover:underline">
                    All account
                  </Link>
                </div>
              </div>
              <div className="border-b border-gray-100 my-4"></div>
              
              {/* Desain Kartu Hijau Sesuai Gambar Target */}
              <div className="bg-primary text-white p-4 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] opacity-80 uppercase tracking-wider">Account Type</p>
                    <p className="text-lg font-bold italic">{item.accountType}</p>
                    <p className="text-[10px] mt-1 tracking-widest">{item.accountNumber}</p>
                  </div>
                  {/* Logo Mastercard / Visa muncul di sini */}
                  <div className="bg-white/20 p-1 rounded-md">
                    {item.logo}
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <p className="text-xl font-bold">${item.balance.toLocaleString()}</p>
                  <div className="bg-white text-primary rounded-full p-1 shadow-md">
                    <Icon.ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        />
      }
    />
  );
}

export default CardBalance;