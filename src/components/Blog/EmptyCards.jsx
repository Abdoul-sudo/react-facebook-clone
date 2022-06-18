import React from "react";

const EmptyCards = ({ title, image, content }) => {
  return (
    <>
      <div className="flex justify-center m-7">
        <div className="bg-white sm:px-4 sm:pt-4 rounded-2xl shadow-lg flex flex-col gap-5 select-none" style={{ width: "30rem" }}>
          <div className="bg-gray-300 w-full animate-pulse w-28 h-9 rounded-2xl animate-pulse mb-2"></div>

          <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" style={{ width: "450px", height: "300px" }}></div>
          <div className="py-5">
            <h5 className="bg-gray-300 w-full animate-pulse h-12 rounded-2xl animate-pulse mb-2"></h5>
            <p className="bg-gray-300 w-full animate-pulse h-24 rounded-2xl animate-pulse mb-4"></p>
            <div className="flex gap-7 mt-7">
              <div className="bg-gray-300 w-full animate-pulse w-24 h-9 rounded-2xl animate-pulse mb-4"></div>
              <div className="bg-gray-300 w-full animate-pulse w-24 h-9 rounded-2xl animate-pulse mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCards;
