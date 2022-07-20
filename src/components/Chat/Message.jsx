import React from "react";
import UserProfile from "../UserProfile";

const Message = ({ message, userSpeakingWith }) => {
  return (
    <>
      {message.sender_id === userSpeakingWith.id && (
        <div className="flex gap-2 pr-16 pl-2 pb-1.5">
          <UserProfile user={userSpeakingWith} size="30" />
          <div className="rounded-full p-2 px-4 border bg-gray-200 w-fit">{message.message}</div>
        </div>
      )}
      {message.receiver_id === userSpeakingWith.id && (
        <div className="pl-16 pr-4 py-1.5 w-full flex justify-end">
          <div className="rounded-full w-full p-2 px-4 border bg-blue-500 text-white text-right w-fit">{message.message}</div>
        </div>
      )}
    </>
  );
};

export default Message;
