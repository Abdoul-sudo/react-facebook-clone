import React from "react";

const PostLoader = ({ title, image, content }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white mt-5 rounded-2xl shadow-sm ">
          {/* username */}
          <div className="flex items-center space-x-2 mx-5 mt-5">
            <div className="rounded-full bg-gray-300 animate-pulse w-10 h-10" width={40} height={40} />
            <div className="bg-gray-300 w-full animate-pulse w-28 h-6 rounded-full animate-pulse"></div>
          </div>

          {/* content */}
          <div className="bg-gray-300 animate-pulse h-12 rounded-full animate-pulse my-4 mx-5"></div>

          {/* image */}
          <div className=" relative bg-white h-56 md:h-96">
            <div className=" w-full h-full bg-gray-300 animate-pulse"></div>
          </div>

          {/* buttons */}
          <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-sm text-gray-400 border-t">
            <div className="inputIconSqueletton rounded-none rounded-bl-2xl">
              <div className="bg-gray-300 w-24 h-7 rounded-2xl animate-pulse"></div>
            </div>
            <div className="inputIconSqueletton rounded-none">
              <div className="bg-gray-300 w-24 h-7 rounded-2xl animate-pulse"></div>
            </div>
            <div className="inputIconSqueletton rounded-none rounded-br-2xl">
              <div className="bg-gray-300 w-24 h-7 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostLoader;
