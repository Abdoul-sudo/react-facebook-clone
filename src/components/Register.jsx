import React, { useRef, useState } from "react";
import axios from "axios";
import { useStateContext } from "../context/GlobalContextProvider";
import { AiFillFileImage } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { setIsRegister } = useStateContext();
  const inputImage = useRef();
  const [inputImageValue, setInputImageValue] = useState("Enter your photo");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    image: "./Abdoul.jpg",
  });

  /******************************************* FORMULAIRE ************************************************* */
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_SERVER}/users`,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(formData),
    })
      .then((resp) => {
        console.log("🚀 ~ file: Register.jsx ~ line 30 ~ .then ~ resp", resp);
        setFormData({
          username: "",
          email: "",
          password: "",
          image: "./Abdoul.jpg",
        });
        toast.success("🦄 User added successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location("/");
      })
      .catch((error) => {
        console.log(JSON.stringify(formData));
        console.log("🚀 ~ file: Register.jsx ~ line 39 ~ handleSubmit ~ error", error);
      });
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  /******************************************* CONTROLS ************************************************* */
  const triggerInput = () => {
    inputImage.current.click();
  };

  const handleImageInput = (e) => {
    if (e.target.files[0]) {
      setInputImageValue(e.target.files[0].name);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center mt-6">
        <div>
          <div className="bg-white w-96 p-6 rounded shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <img src="./logofb.png" alt="" className="h-32" />
            </div>
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
              {/* username ------------------------------------------------------------------------------------------------------------- */}
              <label htmlFor="username" className="text-gray-700">
                Username
              </label>
              <input type="text" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 rounded-md" value={formData.username} name="username" onChange={(e) => handleChange(e)} required></input>

              {/* email ------------------------------------------------------------------------------------------------------------- */}
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <input type="email" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 rounded-md" value={formData.email} name="email" onChange={(e) => handleChange(e)} required></input>

              {/* password ------------------------------------------------------------------------------------------------------------- */}
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <input type="password" className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4 rounded-md" value={formData.password} name="password" onChange={(e) => handleChange(e)} required></input>

              {/* pdp -------------------------------------------------------------------------------------------------------------*/}
              <div className="flex justify-center">
                <div className="mb-3 w-96">
                  <label className="form-label inline-block mb-2 text-gray-700">Photo</label>
                  <input type="file" className="hidden" ref={inputImage} name="image" onChange={handleImageInput} />
                  <div className="flex gap-5 items-center">
                    <AiFillFileImage className="text-green-700 text-4xl cursor-pointer hover:text-green-800 hover:border hover:border-green-600" onClick={triggerInput} />
                    <div className="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none rounded-md h-10 cursor-pointer" onClick={triggerInput}>
                      {inputImageValue}
                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-blue-500 w-full text-gray-100 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors" type="submit">
                Register
              </button>
            </form>
          </div>

          <div className="max-w-lg mx-auto text-center mt-5 mb-5 ">
            Already have an account?{" "}
            <span onClick={() => setIsRegister(false)} className="font-bold hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
              Sign in
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
