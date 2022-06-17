import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return <StateContext.Provider value={{ activeMenu, setActiveMenu }}>{props.children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
