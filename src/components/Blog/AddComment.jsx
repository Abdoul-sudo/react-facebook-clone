import React, { useRef, useState } from "react";
import { useStateContext } from "../../context/GlobalContextProvider";
import UserProfile from "../UserProfile";

const AddComment = ({ postId, addComment }) => {
  const { userConnected } = useStateContext();
  const inputComment = useRef();

  // input submit by enter key
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!inputComment.current.value) return;

    addComment(postId, inputComment.current.value);
    inputComment.current.value = ""; // reset input
  };

  return (
    <form className="flex items-center gap-3 mt-5">
      <UserProfile user={userConnected} size="35" isConnected={true} />
      <input className="bg-gray-100 text-sm sm:text-base text-gray-600 w-full rounded-full px-4 py-2" type="text" placeholder="Enter a comment" ref={inputComment} />
      <button type="submit" hidden onClick={(e) => handleAddComment(e)}>
        Submit
      </button>
    </form>
  );
};

export default AddComment;
