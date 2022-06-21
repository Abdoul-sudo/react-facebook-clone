import React, { useState } from "react";
import axios from "axios";
import { useStateContext } from "../context/GlobalContextProvider";

const Login = () => {
  const { setIsRegister, setUserConnected } = useStateContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_PORT}/login`,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(formData),
    })
      .then((resp) => {
        console.log("🚀 ~/*************** file: Login.jsx ~ line 20 ~ .then ~ resp", resp);
        localStorage.setItem("user", resp.data.user);
        setUserConnected(resp.data.user);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(JSON.stringify(formData));
        console.log(process.env.REACT_APP_API_PORT);
        console.log("🚀 ~ file: Blog.jsx ~ line 36 ~ findUser ~ error", error);
      });
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="bg-white w-96 p-6 rounded shadow-sm">
          <div className="flex items-center justify-center mb-4">
            <img src="./logofb.png" alt="" className="h-32" />
          </div>
          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input type="text" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 rounded-md" value={formData.email} name="email" onChange={(e) => handleChange(e)}></input>
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input type="text" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 rounded-md" value={formData.password} name="password" onChange={(e) => handleChange(e)}></input>
            <button className="bg-blue-500 w-full text-gray-100 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors mt-4" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="max-w-lg mx-auto text-center mt-12 ">
          Don't have an account?{" "}
          <span onClick={() => setIsRegister(true)} className="font-bold hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
