// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components";
import { Blog, Todolist, Users } from "./pages";
import { useStateContext } from "./context/GlobalContextProvider";

function App() {
  const { activeMenu } = useStateContext();

  return (
    <BrowserRouter>
      <div className="flex relative">
        {activeMenu ? (
          <div className="w-72 fixed sidebar bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0">
            <Sidebar />
          </div>
        )}
        <div className={`bg-main-bg-fb min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
          <Routes>
            <Route path="/" element={<Blog limit="3" />} />
            <Route path="posts" element={<Blog limit="3" />} />
            <Route path="todos" element={<Todolist />} />
            <Route path="users" element={<Users />} />
            {/* not found route */}
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
