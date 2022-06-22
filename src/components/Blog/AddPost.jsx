import React, { useRef, useState } from "react";
import { UserConnectedProfile } from "../index";
import { useStateContext } from "../../context/GlobalContextProvider";
import { IoMdImages } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { BiHappyAlt } from "react-icons/bi";

const AddPost = (props) => {
  const { userConnected } = useStateContext();
  const inputRef = useRef();
  const inputFileRef = useRef("");
  const [imagePost, setImagePost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const newPost = {
      userId: userConnected.id,
      title: inputRef.current.value,
      url: inputFileRef.current.files[0] ? inputFileRef.current.files[0].name : "",
      thumbnailUrl: "https://via.placeholder.com/150/7644fe",
      userIdLike: [],
    };
    props.addPost(newPost);

    inputRef.current.value = "";
    inputFileRef.current.value = "";
    inputFileRef.current.file = "";
    setImagePost(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImagePost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImagePost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-sm text-gray-500 font-medium mt-6 ">
      {/* FORM AND USERCONNECTED --------------- */}
      <div className="flex space-x-4 p-4 items-center">
        {/* User profile */}
        <UserConnectedProfile size="40" />

        {/* imput add post */}
        <form action="" className="flex flex-1">
          <input type="text" className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" ref={inputRef} placeholder={`What's on your mind, ${userConnected.username} ?`} />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imagePost && (
          <div onClick={removeImage} className="flex flex-col filter hover.brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img src={imagePost} className="h-10 object-contain" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      {/* ICONS -------------------------------- */}
      <div className="flex justify-between p-2 border-t">
        <div className="inputIcon">
          <span className="text-red-500">
            <RiLiveFill size={25} />
          </span>
          <p className="text-xs sm:text-base">Live video</p>
        </div>

        <div className="inputIcon" onClick={() => inputFileRef.current.click()}>
          <span className="text-green-500">
            <IoMdImages size={25} />
          </span>
          <p className="text-xs sm:text-base">Photo/Video</p>
          <input onChange={(e) => addImageToPost(e)} ref={inputFileRef} type="file" hidden />
        </div>

        <div className="inputIcon">
          <span className="text-yellow-500">
            <BiHappyAlt size={25} />
          </span>
          <p className="text-xs sm:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
