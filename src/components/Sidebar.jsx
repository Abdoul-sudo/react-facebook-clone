import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useStateContext } from "../context/GlobalContextProvider";
import { FaFacebookSquare } from "react-icons/fa";
import { links } from "../dummy";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = ({ handleLogout }) => {
  const { activeMenu, setActiveMenu } = useStateContext();

  // Close le sidebar quand on clicque sur un link (pour mobile)
  const handleCloseSidebar = () => {
    if (activeMenu) {
      setActiveMenu(false);
    }
  };

  // Style links
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-sky-400 ";
  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-sky-100 m-2`;
  const logoutLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-rose-600 font-semibold hover:bg-rose-600 hover:text-white  m-2 cursor-pointer`;

  return (
    <nav className="ml-3 h-screen md:overflow-hidden pb-16 pt-5 ">
      {activeMenu && (
        <>
          <div className="flex flex-col justify-between h-full">
            <div className="mt-10">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                  {item.links.map((link) => (
                    <NavLink to={`/${link.path}`} key={link.name} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
            <div className={logoutLink} onClick={handleLogout}>
              <RiLogoutBoxLine /> <span className="capitalize">Sign out</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Sidebar;
