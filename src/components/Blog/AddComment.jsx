import React, { useRef, useState } from "react";
import { useStateContext } from "../../context/GlobalContextProvider";
import UserConnectedProfile from "../UserConnectedProfile";

const AddComment = ({ postId, addComment }) => {
  const { userConnected } = useStateContext();
  const inputComment = useRef();

  // input submit by enter key
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addComment(postId, e.target.value);
      inputComment.current.value = ""; // reset input
    }
  };

  return (
    <div className="flex items-center gap-3 mt-5">
      <UserConnectedProfile />
      <input className="bg-gray-100 text-sm sm:text-base text-gray-600 w-full rounded-full px-4 py-2" type="text" placeholder="Enter a comment" onKeyUp={(e) => handleKeyUp(e)} ref={inputComment} />
    </div>
  );
};

export default AddComment;
