import React from "react";
import { NavLink } from "react-router-dom";

// Asumsi path import komponen elemen kamu sudah benar
// Jika belum ada komponen ini, pastikan dibuat atau di-comment dulu
import LogoDashboard from "../Elements/LogoDashboard"; 
import Icon from "../Elements/Icon";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Pastikan install @mui/icons-material

const MainLayout = (props) => {
  const { children } = props;

  // Data Menu Sidebar
  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  return (
    <div className="flex bg-special-mainBg min-h-screen font-poppins">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-defaultBlack text-special-bg2 flex flex-col justify-between fixed h-screen overflow-y-auto scrollbar-hide z-10 transition-all duration-300">
        <div>
          {/* Logo */}
          <div className="px-8 py-8 mb-4">
             {/* Jika LogoDashboard belum ada, ganti text biasa dulu: */}
            <LogoDashboard /> 
          </div>

          {/* Navigasi Menu */}
          <nav className="px-4 space-y-2">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                // Logika Style: Jika aktif warna putih & bold + border kiri, jika tidak abu-abu
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-primary text-white font-semibold shadow-lg shadow-primary/30"
                      : "hover:bg-special-bg3 hover:text-white"
                  }`
                }
              >
                {/* Icon: Menggunakan cloneElement agar fill/stroke bisa berubah (opsional) */}
                <div className={`mr-4 ${({isActive}) => isActive ? "text-white" : ""}`}>
                  {item.icon}
                </div>
                <span className="text-sm tracking-wide">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer Sidebar (Logout & Profile) */}
        <div className="px-4 py-8 border-t border-gray-800/50">
          <button className="flex items-center w-full px-4 py-3 text-special-bg2 hover:text-white transition-colors">
            <Icon.Logout className="mr-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
          
          <div className="mt-8 px-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=User+Name" alt="avatar" />
            </div>
            <div className="flex-1">
                <p className="text-white text-sm font-bold">Username</p>
                <p className="text-xs text-gray-500">View Profile</p>
            </div>
          </div>
        </div>
      </aside>

      {/* --- KONTEN KANAN --- */}
      {/* ml-64 digunakan karena sidebar posisinya fixed */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Header */}
        <header className="bg-white px-8 py-5 flex justify-between items-center sticky top-0 z-10 border-b border-gray-200">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
                <p className="text-sm text-gray-500">May 19, 2023</p>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative cursor-pointer">
                    <NotificationsIcon className="text-gray-400 hover:text-primary transition-colors" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                {/* Search Bar / Input */}
                <div className="hidden md:block">
                     <input 
                        type="text" 
                        placeholder="Search here..." 
                        className="bg-gray-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                     />
                </div>
            </div>
        </header>

        {/* Main Content (Children) */}
        <main className="p-8 flex-1 overflow-y-auto">
            {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;