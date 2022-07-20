import React, { useRef } from "react";
import { MdSend } from "react-icons/md";
import { useStateContext } from "../../context/GlobalContextProvider";
import UserConnectedProfile from "../UserConnectedProfile";

const AddMessage = ({ addMessage, userSpeakingWith }) => {
  const inputRef = useRef();
  const { userConnected } = useStateContext();

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    const newMessage = {
      message: inputRef.current.value,
      sender_id: userConnected.id,
      receiver_id: userSpeakingWith.id,
      created_at: new Date(),
    };
    addMessage(newMessage);

    inputRef.current.value = "";
  };

  return (
    <div className="pt-3 px-4">
      <form action="" className="flex flex-1 gap-1">
        <input type="text" className="rounded-full h-10 bg-gray-100 flex-grow px-5 focus:outline-none" ref={inputRef} placeholder="Aa" />
        <button type="submit" className="text-blue-500 rounded-full hover:bg-gray-100 w-10 h-10 flex items-center justify-center" onClick={sendMessage}>
          <MdSend size={25} />
        </button>
      </form>
    </div>
  );
};

export default AddMessage;
