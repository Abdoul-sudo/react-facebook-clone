import React from "react";
import { useStateContext } from "../context/GlobalContextProvider";

const UserConnectedProfile = ({ size }) => {
  const { userConnected } = useStateContext();
  return (
    <div className="relative">
      <img className="rounded-full" src={userConnected.image ? process.env.REACT_APP_IMAGE_PATH + userConnected.image : `${process.env.REACT_APP_IMAGE_PATH}user_empty.jpg`} width={size} height={size} alt="" />
      <div className="absolute rounded-full bg-green-500 w-2.5 h-2.5 border border-white right-0 bottom-0.5"></div>
    </div>
  );
};

export default UserConnectedProfile;
