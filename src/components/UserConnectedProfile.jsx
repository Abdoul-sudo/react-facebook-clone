import React from "react";
import { useStateContext } from "../context/GlobalContextProvider";

const UserConnectedProfile = () => {
  const { userConnected } = useStateContext();
  return (
    <div className="relative">
      <img className="rounded-full object-cover" src={userConnected.image ? userConnected.image : "./user_empty.jpg"} width={30} height={30} alt="" />
      <div className="absolute rounded-full bg-green-500 w-2.5 h-2.5 border border-white right-0 bottom-0.5"></div>
    </div>
  );
};

export default UserConnectedProfile;
