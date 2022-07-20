import React from "react";

const UserProfile = ({ user, size, isConnected }) => {
  return (
    <div className="relative">
      <img className="rounded-full" src={user.image ? process.env.REACT_APP_IMAGE_PATH + user.image : `${process.env.REACT_APP_IMAGE_PATH}user_empty.jpg`} width={size} height={size} alt="" />
      {isConnected && <div className="absolute rounded-full bg-green-500 w-2.5 h-2.5 border border-white right-0 bottom-0.5"></div>}
    </div>
  );
};

export default UserProfile;
