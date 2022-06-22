import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStateContext } from "../context/GlobalContextProvider";
import { UserConnectedProfile } from "./index";
import { FaFacebookSquare } from "react-icons/fa";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
    <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
    {icon}
  </button>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, userConnected } = useStateContext();

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
    <div className="fixed-top w-full flex justify-between py-2 md:pl-10 md:pr-4 items-center shadow-md bg-white">
      {/* <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />} /> */}
      <div className="flex justify-between items-center">
        <Link to="#" className="items-center gap-3 flex text-2xl font-extrabold tracking-light text-slate-900 text-sky-900">
          <FaFacebookSquare /> <span>AppExam</span>
        </Link>
      </div>
      <div className="flex">
        {/* <NavButton title="Cart" customFunc={() => handleClick("cart")} color="blue" icon={<FiShoppingCart />} />
        <NavButton title="Chat" customFunc={() => handleClick("chat")} dotColor="#03C9D7" color="blue" icon={<BsChatLeft />} />
        <NavButton title="Notification" customFunc={() => handleClick("notification")} dotColor="#03C9D7" color="blue" icon={<RiNotificationLine />} /> */}
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" data-dropdown-toggle="dropdownUserProfile">
          <UserConnectedProfile size="40" />
          <p>
            <span className="text-gray-400 text-14">Hi, </span> <span className="text-gray-400 font-bold ml-1 text-14">{userConnected.username}</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>

        {/* <div id="dropdownUserProfile" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Separated link
            </a>
          </div>
        </div> */}
        {/* {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
      </div>
    </div>
  );
};

export default Navbar;
