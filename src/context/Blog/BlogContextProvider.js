import React, { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const [showComments, setShowComments] = useState(false);

  return <BlogContext.Provider value={{ showComments, setShowComments }}>{props.children}</BlogContext.Provider>;
};

export const useStateContext = () => useContext(BlogContext);
