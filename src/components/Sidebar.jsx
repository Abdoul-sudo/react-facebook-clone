import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { FaFacebookSquare } from "react-icons/fa";
import { links } from "../dummy";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  // Close le sidebar quand on clicque sur un link (pour mobile)
  const handleCloseSidebar = () => {
    if (activeMenu) {
      setActiveMenu(false);
    }
  };

  // Style links
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-sky-400 ";
  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2`;

  return (
    <nav className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold tracking-light text-slate-900 text-sky-900">
              <FaFacebookSquare /> <span>AppExam</span>
            </Link>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink to={`/${link.name}`} key={link.name} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </nav>
  );
};

export default Sidebar;
