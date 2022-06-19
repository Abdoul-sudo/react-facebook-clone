import React from "react";

const Button = ({ onClick, className, style, children }) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
