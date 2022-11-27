import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  // if (!user) {
  //   return <Navigate to="/" />;
  // }
  // return children;

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
