import React, { useEffect, useState } from "react";
import { Button } from "../index";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import axios from "axios";

const Card = ({ post, userId }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const findUser = () => {
      axios({
        method: "GET",
        url: `http://localhost:3002/users/${userId}`,
      })
        .then((resp) => {
          console.log("🚀 ~aaaaaaaaaaa file: Card.jsx ~ line 16 ~ .then ~ resp", resp);
          setUser(resp.data);
        })
        .catch((error) => {
          console.log("🚀 ~ file: Blog.jsx ~ line 36 ~ findUser ~ error", error);
        });
    };
    findUser();
  }, []);

  return (
    <>
      <div className="flex flex-col bg-main-bg-fb">
        <div className=" bg-white mt-5 rounded-2xl shadow-sm">
          {/* Profile */}
          <div className="flex items-center space-x-2 mx-5 mt-5">
            <img className="rounded-full" src={user.image} width={40} height={40} alt="" />
            <div className="font-medium">{user.username}</div>
          </div>

          {/* Title */}
          <p className="py-4 mx-5">{post.title}</p>

          {/* Image */}
          {post.url && (
            <div className=" relative bg-white h-56 md:h-96">
              <img className="object-cover h-full w-full" src={post.url} alt="" />
            </div>
          )}

          {/* footer*/}
          <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-sm text-gray-400 border-t">
            <Button className="inputIcon rounded-none rounded-bl-2xl">
              <AiOutlineLike className="h-4" />
              <p className="text-xs sm:text-base">Like</p>
            </Button>

            <Button className="inputIcon rounded-none">
              <BiComment className="h-4" />
              <p className="text-xs sm:text-base">Comment</p>
            </Button>

            <Button className="inputIcon rounded-none rounded-br-2xl">
              <AiOutlineShareAlt className="h-4" />
              <p className="text-xs sm:text-base">Share</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
