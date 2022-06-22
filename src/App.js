// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { Blog, Todolist, Users, LoginPage } from "./pages";
import { useStateContext } from "./context/GlobalContextProvider";

function App() {
  const { activeMenu, userConnected } = useStateContext();

  return (
    <BrowserRouter>
      <div className="flex bg-main-bg-fb">
        {userConnected && (
          <div className="flex flex-col">
            <div className="fixed-top  bg-white navbar w-full top-0 right-0">
              <Navbar />
            </div>
            {/* Hide Sidebar for mobile */}
            {activeMenu ? (
              <div className="w-72 sidebar fixed mt-20">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0">
                <Sidebar />
              </div>
            )}
          </div>
        )}

        <div className={`bg-main-bg-fb w-full ${activeMenu && userConnected ? "md:ml-72" : "flex-2"}`}>
          <Routes>
            {userConnected ? (
              <>
                <Route path="/" element={<Blog limit="3" />} />
                <Route path="posts" element={<Blog limit="3" />} />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
