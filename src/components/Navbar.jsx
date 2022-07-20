import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillMessage, AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStateContext } from "../context/GlobalContextProvider";
import { UserConnectedProfile, UserProfile } from "./index";
import { FaFacebookSquare } from "react-icons/fa";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
    <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
    {icon}
  </button>
);

const Navbar = ({ handleLogout, chatUser, users }) => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, userConnected } = useStateContext();

  const [dropdownProfileDisplay, setDropdownProfileDisplay] = useState("hidden");
  const [dropdownUserList, setDropdownUserList] = useState("hidden");

  // A chq resize, on set le screenSize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Cache le sidebar si ecran mobile car sinon le sidebar cache tout l'ecran
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <>
      <div className="fixed-top w-full flex justify-between py-2 md:pl-10 md:pr-4 items-center shadow-md bg-white">
        <div className="flex justify-between items-center">
          <Link to="/" className="items-center gap-3 flex text-2xl font-extrabold tracking-light text-slate-900 text-sky-900">
            <FaFacebookSquare /> <span>AppExam</span>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          {/* Message icon ------------------------------------*/}
          <button onClick={() => (dropdownUserList == "hidden" ? setDropdownUserList("block") : setDropdownUserList("hidden"))} className=" bg-gray-100 hover:bg-gray-200 rounded-full w-11 h-11 flex items-center justify-center text-blue-500">
            <AiOutlineMessage size={25} />
          </button>

          {/* Profile ------------------------------------------*/}
          <button onClick={() => (dropdownProfileDisplay == "hidden" ? setDropdownProfileDisplay("block") : setDropdownProfileDisplay("hidden"))} className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" data-dropdown-toggle="dropdownUserProfile" type="button">
            <UserConnectedProfile size="40" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> <span className="text-gray-400 font-bold ml-1 text-14">{userConnected.username}</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </button>
        </div>
      </div>

      {/* Dropdown profile */}
      <div className="">
        <div id="dropdownUserProfile" className={`${dropdownProfileDisplay} fixed right-3 top-16 w-44 p-2 border-t bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`} style={{ zIndex: 10011 }}>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Lorem, ipsum.
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Lorem, ipsum.
              </a>
            </li>
            <li>
              <a onClick={handleLogout} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer text-red-500">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown user list */}
      <div className="">
        <div id="dropdownUserProfile" className={`${dropdownUserList} fixed right-28 top-16 w-80 p-2 border-t bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 overflow-y-auto`} style={{ zIndex: 10001 }}>
          <div className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
            {users &&
              users.map((user, index) => (
                <button key={index} onClick={() => (setDropdownUserList("hidden"), chatUser(user))} className="flex gap-2 items-center w-full flex-wrap p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer rounded-md">
                  <UserProfile user={user} size={40} />
                  <span className="block px-4 ">{user.username}</span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
