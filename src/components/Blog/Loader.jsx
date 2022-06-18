import React from "react";

const Loader = () => {
  return (
    <div className="flex gap-10 justify-center">
      <div
        className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-purple-500
      "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      <div
        className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-purple-500
      "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      <div
        className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-purple-500
      "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
