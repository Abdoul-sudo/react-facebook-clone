import React from "react";
import { Login, Register } from "../components";
import { useStateContext } from "../context/GlobalContextProvider";

const LoginPage = () => {
  const { isRegister } = useStateContext();
  return <div>{isRegister ? <Register /> : <Login />}</div>;
};

export default LoginPage;
