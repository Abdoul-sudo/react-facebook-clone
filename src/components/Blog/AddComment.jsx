import React, { useRef, useState } from "react";
import { useStateContext } from "../../context/GlobalContextProvider";

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
      <div className="relative">
        <img className="rounded-full object-cover" src={userConnected.image ? userConnected.image : "./user_empty.jpg"} width={30} height={30} alt="" />
        <div className="absolute rounded-full bg-green-500 w-2.5 h-2.5 border border-white right-0 bottom-0.5"></div>
      </div>
      <input className="bg-gray-100 text-sm text-gray-600 w-full rounded-full px-4 py-2" type="text" placeholder="Enter a comment" onKeyUp={(e) => handleKeyUp(e)} ref={inputComment} />
    </div>
  );
};

export default AddComment;
