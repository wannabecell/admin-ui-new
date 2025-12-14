import React from "react";
import SignInPage from "./pages/signin"; // <-- Ubah ke signin untuk mengecek

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <SignInPage /> {/* <-- Panggil SignInPage */}
    </div>
  );
}

export default App;