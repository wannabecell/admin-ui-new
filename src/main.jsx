// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import './App.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
// <React.StrictMode>
//     <ThemeContextProvider> 
//       <App />
//     </ThemeContextProvider>
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import Provider yang baru dibuat [cite: 948-949]
import { ThemeContextProvider } from "./context/themeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Bungkus App dengan Provider agar state global bisa diakses [cite: 932, 961-963] */}
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);