import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
// 1. Import Data dari src/data.jsx
import { 
  balances, 
  goals, 
  expensesStatistics, 
  bills, 
  transactions, 
  expensesBreakdowns 
} from "../data";

// 2. Import Semua Fragment
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";

//coba2
//coba2

function DashboardPage() {
  return (
    // Tambahkan prop title agar Header berubah menjadi "Overview"
    <MainLayout title="Overview">
      <div className="grid sm:grid-cols-12 gap-6 h-full font-poppins">
        {/* --- BARIS ATAS --- */}
        <div className="sm:col-span-4">
          {/* WAJIB: Kirim data balances agar muncul kartu hijau & Mastercard */}
          <CardBalance data={balances} />
        </div>
        <div className="sm:col-span-4">
          {/* WAJIB: Kirim data goals agar grafik lingkaran muncul */}
          <CardGoal data={goals} />
        </div>
        <div className="sm:col-span-4">
          <CardUpcomingBill data={bills} />
        </div>

        {/* --- BARIS TENGAH & BAWAH --- */}
        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>
        <div className="sm:col-span-8">
          {/* WAJIB: Kirim data agar grafik batang (Bar Chart) muncul */}
          <CardStatistic data={expensesStatistics} />
        </div>
        <div className="sm:col-span-8">
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>
      </div>
    </MainLayout>
  );
}

export default DashboardPage;