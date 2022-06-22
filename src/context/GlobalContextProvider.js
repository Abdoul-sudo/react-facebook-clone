import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const navbarState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const GlobalContextProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState(true); // show sidebar menu
  const [isRegister, setIsRegister] = useState(false); // switch signUp signIn
  const [isClicked, setIsClicked] = useState(navbarState);
  const [screenSize, setScreenSize] = useState(undefined);

  var userConnected = "";
  if (localStorage.getItem("user")) {
    userConnected = JSON.parse(localStorage.getItem("user")); // get the user connected from localStorage
  }

  return <GlobalContext.Provider value={{ activeMenu, setActiveMenu, userConnected, isRegister, setIsRegister, screenSize, setScreenSize }}>{props.children}</GlobalContext.Provider>;
};

export const useStateContext = () => useContext(GlobalContext);
