import React, { useState } from "react";
import axios from "axios";
import { useStateContext } from "../context/GlobalContextProvider";

const Login = () => {
  const { setIsRegister } = useStateContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_SERVER}/login`,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(formData),
    })
      .then((resp) => {
        console.log("🚀 ~/*************** file: Login.jsx ~ line 20 ~ .then ~ resp", resp.data.user);
        localStorage.setItem("user", JSON.stringify(resp.data.user));
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.jsx ~ line 36 ~ findUser ~ error", error);
        setError(error.response.data);
      });
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="bg-white w-96 p-6 rounded shadow-sm">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4">
            <img src="./logofb.png" alt="" className="h-32" />
          </div>

          {error && <div className="text-red-500">{error}</div>}
          {/* Form */}
          <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            {/* Email */}
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input type="text" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 rounded-md border border-slate-300 focus:ring-1 focus:ring-sky-500" value={formData.email} name="email" onChange={(e) => handleChange(e)} placeholder="Email"></input>

            {/* Password */}
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input type="password" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 rounded-md border border-slate-300 focus:ring-1 focus:ring-sky-500" value={formData.password} name="password" onChange={(e) => handleChange(e)} placeholder="Password"></input>

            {/* Login button */}
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
