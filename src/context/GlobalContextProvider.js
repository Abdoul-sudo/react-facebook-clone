import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState(true); // show sidebar menu
  const [isRegister, setIsRegister] = useState(false); // switch signUp signIn
  var userConnected = "";
  if (localStorage.getItem("user")) {
    userConnected = JSON.parse(localStorage.getItem("user")); // get the user connected from localStorage
  }

  return <GlobalContext.Provider value={{ activeMenu, setActiveMenu, userConnected, isRegister, setIsRegister }}>{props.children}</GlobalContext.Provider>;
};

export const useStateContext = () => useContext(GlobalContext);
