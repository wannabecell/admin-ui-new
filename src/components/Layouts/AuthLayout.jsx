import React from "react";
import Logo from "../Elements/Logo";
import { Link } from "react-router-dom"; // 1. Import Link

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center font-poppins">
      <div className="w-full max-w-xs">
        <div className="flex justify-center mb-6">
            <Logo />
        </div>
        
        <h1 className="text-2xl font-bold mb-8 text-center text-slate-900">{title}</h1>
        {children}
        
        {/* Footer Link */}
        <p className="text-sm mt-5 text-center text-slate-500">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {/* 2. Gunakan Link dan properti 'to' (bukan href) */}
          {type === "login" && (
            <Link to="/signup" className="font-bold text-teal-600">
              Sign up
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-teal-600">
              Sign in here
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;