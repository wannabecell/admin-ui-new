import React from "react";
import { NavLink } from "react-router-dom";
import LogoDashboard from "../Elements/LogoDashboard"; 
import Icon from "../Elements/Icon";
import NotificationsIcon from "@mui/icons-material/Notifications";

const MainLayout = (props) => {
  const { children } = props;

  // 1. Data Menu Sidebar (Sesuai dokumen hal. 17-18) [cite: 1090-1101, 1121-1141]
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
      {/* --- SIDEBAR --- [cite: 1543-1545, 1637] */}
      <aside className="w-64 bg-defaultBlack text-special-bg2 flex flex-col justify-between fixed h-screen overflow-y-auto scrollbar-hide z-10 transition-all duration-300">
        <div>
          {/* Logo Section [cite: 1549-1551, 1640-1642] */}
          <div className="px-8 py-8 mb-4">
            <LogoDashboard /> 
          </div>

          {/* Navigasi Menu Dinamis [cite: 1563-1572, 1613-1623, 1646-1688] */}
          <nav className="px-4 space-y-2">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-primary text-white font-semibold shadow-lg shadow-primary/30"
                      : "hover:bg-special-bg3 hover:text-white text-special-bg2"
                  }`
                }
              >
                {/* Menggunakan inheritance currentColor untuk ikon */}
                <div className="mr-4">
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

      {/* --- KONTEN KANAN --- [cite: 187, 1023] */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Header [cite: 188-197, 1025-1031, 1055-1058] */}
        <header className="bg-white px-8 py-5 flex justify-between items-center sticky top-0 z-10 border-b border-gray-200">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
                <p className="text-sm text-gray-500">May 19, 2023</p>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative cursor-pointer">
                    {/* Ikon Notifikasi dari MUI Library [cite: 16-19, 194, 277] */}
                    <NotificationsIcon className="text-gray-400 hover:text-primary transition-colors" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                <div className="hidden md:block">
                     <input 
                        type="text" 
                        placeholder="Search here..." 
                        className="bg-gray-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                     />
                </div>
            </div>
        </header>

        {/* Main Content [cite: 198, 283] */}
        <main className="p-8 flex-1 overflow-y-auto">
            {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;