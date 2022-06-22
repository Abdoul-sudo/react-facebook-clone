import React, { useEffect, useState } from "react";
import { Button } from "../index";
import { AiFillLike, AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import axios from "axios";
import { Comment, CommentLoader, AddComment } from "../index";
import { useStateContext } from "../../context/GlobalContextProvider";

const Card = ({ post, handleLike }) => {
  const [user, setUser] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const { userConnected } = useStateContext();

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
  const commentsLimit = 3;

  // POST USERNAME - USERIMAGE ---------------------------------------------------------------------------------------
  useEffect(() => {
    const findUser = () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_SERVER}/users/${post.userId}`,
      })
        .then((resp) => {
          setUser(resp.data);
        })
        .catch((error) => {
          console.log("🚀 ~ file: Post.jsx ~ line 19 ~ findUser ~ error", error);
        });
    };

    findUser();
  }, []);

  // LIKE ---------------------------------------------------------------------------------------
  useEffect(() => {
    const checkIsLiked = () => {
      post.userIdLike.includes(userConnected.id) ? setIsLiked(true) : setIsLiked(false);
    };

    checkIsLiked();
  }, [post]);

  // COMMENT ---------------------------------------------------------------------------------------
  // GET ********************
  const fetchComments = () => {
    setShowComments(true);
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_SERVER}/comments`,
      params: { postId: post.id, _page: page, _limit: commentsLimit },
    })
      .then((resp) => {
        console.log("🚀 ~ file: Post.jsx ~ line 58 ~ .then ~ resp", resp);
        setComments([...comments, ...resp.data]);
        if (resp.data.length === 0 || resp.data.length < commentsLimit) {
          sethasMore(false);
        }
        setpage(page + 1);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Post.jsx ~ line 19 ~ fetchComments ~ error", error);
      });
  };

  // ADD ********************
  const addComment = (postId, content) => {
    const dataComment = {
      userId: userConnected.id,
      postId: postId,
      content: content,
    };

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_SERVER}/comments`,
      data: JSON.stringify(dataComment),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        setComments([...comments, resp.data]);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Post.jsx ~ line 83 ~ addComment ~ error", error);
      });
  };

  // VIEW ---------------------------------------------------------------------------------------
  return (
    <>
      <div className="flex flex-col bg-main-bg-fb">
        <div className=" bg-white mt-5 rounded-2xl shadow-sm">
          {/* Profile */}
          <div className="flex items-center space-x-2 mx-5 mt-5">
            <img className="rounded-full" src={user.image ? user.image : "./user_empty.jpg"} width={40} height={40} alt="" />
            <div className="font-medium">{user.username}</div>
          </div>

          {/* Title */}
          <p className="py-4 mx-5">{post.title}</p>

          {/* Image */}
          {post.url && (
            <div className=" bg-white h-56 md:h-96">
              <img className="object-cover h-full w-full" src={post.url} alt="" />
            </div>
          )}

          {/* number of likes */}
          {post.userIdLike.length > 0 && (
            <div className="flex space-x-3 items-center rounded-b-2xl bg-white shadow-sm text-gray-400 border-t p-2 pl-4">
              <div className="bg-blue-500 rounded-full text-white w-6 h-6 flex justify-center items-center">
                <AiFillLike />
              </div>
              <span className="text-gray-400">{post.userIdLike.length}</span>
            </div>
          )}

          {/* buttons*/}
          <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-sm text-gray-400 border-t">
            {/* like Button */}
            <Button className="inputIcon rounded-none rounded-bl-2xl" onClick={() => handleLike(post.id, userConnected.id)}>
              {isLiked ? <AiFillLike className="h-4 text-blue-500 focus:rotate-12" /> : <AiOutlineLike className="h-4 focus:transform" />}
              <p className={`text-xs sm:text-base ${isLiked && "text-blue-500"}`}>Like</p>
            </Button>

            {/* Comment Button */}
            <Button className="inputIcon rounded-none" onClick={fetchComments}>
              <BiComment className="h-4" />
              <p className="text-xs sm:text-base">Comment</p>
            </Button>

            {/* Share Button */}
            <Button className="inputIcon rounded-none rounded-br-2xl">
              <AiOutlineShareAlt className="h-4" />
              <p className="text-xs sm:text-base">Share</p>
            </Button>
          </div>

          {/* Comment section */}
          {showComments && (
            <div>
              {comments ? (
                <div className="rounded-b-2xl pb-4 px-5">
                  <div className=" flex flex-col  bg-gray text-gray-400 ">
                    <AddComment postId={post.id} addComment={addComment} />
                    {comments.map((comment) => (
                      <Comment key={comment.id} comment={comment} />
                    ))}
                  </div>
                  {hasMore && (
                    <button className="text-xs sm:text-base text-gray-400 font-semibold mt-6 hover:underline cursor-pointer" onClick={fetchComments}>
                      View more ...
                    </button>
                  )}
                </div>
              ) : (
                <div className="min-h-12 flex  items-center justify-center rounded-b-2xl bg-gray shadow-sm text-gray-400 border-t pb-4">
                  <CommentLoader />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
