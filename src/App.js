// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { Blog, Todolist, Users, LoginPage } from "./pages";
import { useStateContext } from "./context/GlobalContextProvider";

function App() {
  const { activeMenu, userConnected } = useStateContext();
  const [userSpeakingWith, setUserSpeakingWith] = useState({});
  const [users, setUsers] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const chatUser = (user) => {
    console.log("🚀 ~ file: App.js ~ line 20 ~ chatUser ~ user", user);
    setUserSpeakingWith(user);
  };

  useEffect(() => {
    const getUsers = () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_SERVER}/users`,
      })
        .then((resp) => {
          setUsers(resp.data);
        })
        .catch((error) => {
          console.log("🚀 ~ file: Blog.jsx ~ line 31 ~ fetchPosts ~ error", error);
        });
    };
    getUsers();
  }, []);

  return (
    <BrowserRouter>
      <div className="flex bg-main-bg-fb min-h-screen">
        {userConnected && (
          <div className="flex flex-col">
            <Navbar handleLogout={handleLogout} chatUser={chatUser} users={users} />
            {/* Hide Sidebar for mobile */}
            {activeMenu ? (
              <div className="w-72 fixed top-11">
                <Sidebar handleLogout={handleLogout} />
              </div>
            ) : (
              <div className="w-0">
                <Sidebar handleLogout={handleLogout} />
              </div>
            )}
          </div>
        )}

        <div className={`bg-main-bg-fb w-full mt-20 ${activeMenu && userConnected ? "md:ml-72" : "flex-2"}`}>
          <Routes>
            {userConnected ? (
              <>
                <Route path="/" element={<Blog limit="3" userSpeakingWith={userSpeakingWith} />} />
                <Route path="posts" element={<Blog limit="3" userSpeakingWith={userSpeakingWith} />} />
                <Route path="todos" element={<Todolist />} />
                <Route path="users" element={<Users />} />
                {/* not found route */}
                <Route path="*" element={<h1>Not Found</h1>} />
              </>
            ) : (
              <>
                <Route path="*" element={<LoginPage />} />
              </>
            )}
          </Routes>
        </div>
        {/* ========================================================================================================================== */}
      </div>
    </BrowserRouter>
  );
}

export default App;
