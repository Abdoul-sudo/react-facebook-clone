import React from "react";

const Users = () => {
  return (
    <>
      <div className="bg-main-bg-fb mx-auto max-w-md md:max-w-lg">
        <h1>Users</h1>
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
      </div>

      <div>
        <svg role="status" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
      </div>
    </>
  );
};

export default Users;
