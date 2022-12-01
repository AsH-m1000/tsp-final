import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const Protected = (props) => {
  const { Components } = props;
  const { user } = useUserAuth();
  const navigate = useNavigate();
  if (!user) {
    navigate("/");
  }
  return (
    <div>
      <Components />
    </div>
  );

  // console.log("Check user in Private: ", user);
  // if (!user) {
  //   return <Navigate to="/" />;
  // }
  // return;
};

export default Protected;
