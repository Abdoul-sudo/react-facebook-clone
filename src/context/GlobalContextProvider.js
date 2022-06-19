import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return <GlobalContext.Provider value={{ activeMenu, setActiveMenu }}>{props.children}</GlobalContext.Provider>;
};

export const useStateContext = () => useContext(GlobalContext);
