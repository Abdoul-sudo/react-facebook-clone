import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [userConnected, setUserConnected] = useState(null);

  useEffect(() => {
    setUserConnected(localStorage.getItem("user"));
  }, []);

  return <GlobalContext.Provider value={{ activeMenu, setActiveMenu, userConnected, setUserConnected, isRegister, setIsRegister }}>{props.children}</GlobalContext.Provider>;
};

export const useStateContext = () => useContext(GlobalContext);
