import React from "react";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

const Card = ({ userImage, userName, title, image, content }) => {
  return (
    <>
      <div className="flex flex-col bg-main-bg-fb">
        <div className=" bg-white mt-5 rounded-2xl shadow-sm">
          {/* Profile */}
          <div className="flex items-center space-x-2 mx-5 mt-5">
            <img className="rounded-full" src={userImage} width={40} height={40} alt="" />
            <div className="font-medium">{userName}</div>
          </div>

          {/* Title */}
          <p className="py-4 mx-5">{title}</p>

          {/* Image */}
          <div className=" relative bg-white h-56 md:h-96">
            {/* <div className="relative bg-white"> */}
            <img className="object-cover h-full w-full" src={image} alt="" />
          </div>

          <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
            <div className="inputIcon rounded-none rounded-bl-2xl">
              <AiOutlineLike className="h-4" />
              <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="inputIcon rounded-none">
              <BiComment className="h-4" />
              <p className="text-xs sm:text-base">Comment</p>
            </div>
            <div className="inputIcon rounded-none rounded-br-2xl">
              <AiOutlineShareAlt className="h-4" />
              <p className="text-xs sm:text-base">Share</p>
            </div>
          </div>

          {/* Button */}
        </div>
      </div>
    </>
  );
};

export default Card;
