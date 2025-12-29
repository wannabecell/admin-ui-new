import React from "react";
import Card from "../Elements/Card";
import { goals } from "../../data";
import Icon from "../Elements/Icon";
// Import MUI Components
import { CircularProgress, Box, Typography } from "@mui/material";

const CardGoal = () => {
  // Hitung persentase: (12500 / 20000) * 100 = 62.5%
  const chartValue = (goals.presentAmount / goals.targetAmount) * 100;

  return (
    <Card
      title="Goals"
      desc={
        <div className="p-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">${goals.targetAmount.toLocaleString()}</p>
              <div className="p-1 bg-gray-100 rounded cursor-pointer">
                <Icon.Edit size={16} />
              </div>
            </div>
            <p className="text-gray-400 text-sm">May, 2023</p>
          </div>
          
          {/* Grafik Lingkaran (Sesuai Desain Finebank) */}
          <div className="flex flex-col items-center justify-center mt-6">
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress 
                variant="determinate" 
                value={chartValue} 
                size={120} 
                thickness={5}
                sx={{ color: "#299D91" }} // Warna primer hijau
              />
              <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="caption" component="div" className="font-bold text-xl text-black">
                  {`${Math.round(chartValue)}%`}
                </Typography>
              </Box>
            </Box>
            
            <div className="flex justify-between w-full mt-6 text-xs">
               <div className="text-gray-400 text-center">
                 <p>Target Value</p>
                 <p className="text-black font-bold">${goals.targetAmount.toLocaleString()}</p>
               </div>
               <div className="text-gray-400 text-center">
                 <p>Achievement</p>
                 <p className="text-black font-bold">${goals.presentAmount.toLocaleString()}</p>
               </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default CardGoal;