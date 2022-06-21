import axios from "axios";
import React, { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  const [user, setUser] = useState("");

  // COMMENT USERNAME - USERIMAGE ---------------------------------------------------------------------------------------
  useEffect(() => {
    const findUser = () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_SERVER}/users/${comment.userId}`,
      })
        .then((resp) => {
          setUser(resp.data);
        })
        .catch((error) => {
          console.log("🚀 ~ file: Comment.jsx ~ line 18 ~ findUser ~ error", error);
        });
    };

    findUser();
  }, []);

  return (
    <>
      <div className="flex gap-3 mt-5 mr-9">
        {/* user image */}
        <div className="mt-1">
          <img className="rounded-full object-cover" src={user.image ? user.image : "./user_empty.jpg"} width={30} height={30} alt="" />
        </div>

        {/* username and his comment */}
        <div className="bg-gray-100 w-full rounded-xl px-4 pt-1 pb-2 text-xs text-gray-600 ">
          <p className="font-semibold mb-1">{user.username}</p>
          <p>{comment.content}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
