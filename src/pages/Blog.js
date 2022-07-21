import axios from "axios";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post, EndScroll, PostLoader, AddPost, Chat } from "../components";
import { useStateContext } from "../context/GlobalContextProvider";

const Blog = (props) => {
  const { userConnected } = useStateContext();

  const [posts, setPosts] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);

  const [hasMoreMessages, sethasMoreMessages] = useState(true);
  const [messages, setMessages] = useState([]);
  const [pageMessage, setpageMessage] = useState(1);
  const [showChat, setShowChat] = useState(false);

  // POSTS  ---------------------------------------------------------------------------------------
  useEffect(() => {
    fetchPosts();
  }, []);
  const resetStates = () => {
    setpageMessage(1);
    setMessages([]);
    sethasMoreMessages(true);
    return true;
  };
  useEffect(() => {
    const showChatByUser = async (user) => {
      await setpageMessage(1);
      await setMessages([]);
      await sethasMoreMessages(true);
      console.log("mmmmmmmmmmm", messages, props.userSpeakingWith);
      //if message is empty
      if (messages.length === 0) {
        fetchMessages(user.id);
      }
    };
    if (props.userSpeakingWith.id) {
      resetStates();
      setShowChat(true);
      showChatByUser(props.userSpeakingWith);
    }
  }, [props.userSpeakingWith.id]);

  // GET
  const fetchPosts = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_SERVER}/posts`,
      params: { _page: page, _limit: props.limit, _sort: "id", _order: "desc" },
    })
      .then((resp) => {
        setPosts([...posts, ...resp.data]);
        if (resp.data.length === 0 || resp.data.length < props.limit) {
          sethasMore(false);
        }
        setpage(page + 1);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.jsx ~ line 31 ~ fetchPosts ~ error", error);
      });
  };

  // ADD POST  ---------------------------------------------------------------------------------------
  const addPost = (newPost) => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_SERVER}/posts`,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(newPost),
    })
      .then((resp) => {
        setPosts([resp.data, ...posts]);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.js ~ line 48 ~ addPost ~ error", error);
      });
  };

  // DELETE POST -------------------------------------------------------------------------------------
  const deletePost = (idPost) => {
    console.log("🚀 ~ file: Blog.js ~ line 55 ~ deletePost ~ idPost", idPost);

    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_SERVER}/posts/${idPost}`,
    })
      .then((resp) => {
        console.log("🚀 ~ =======================file: Blog.js ~ line 61 ~ .then ~ resp", resp);
        setPosts(posts.filter((post) => post.id !== idPost));
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.js ~ line 48 ~ addPost ~ error", error);
      });
  };

  // LIKE ---------------------------------------------------------------------------------------
  const handleLike = (postId, userId) => {
    const post = posts.find((post) => post.id === postId);
    if (post.userIdLike.includes(userId)) {
      post.userIdLike = post.userIdLike.filter((user) => user !== userId);
    } else {
      post.userIdLike.push(userId);
    }

    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_SERVER}/posts/${postId}`,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(post),
    })
      .then((resp) => {
        const updatedPost = posts.map((post) => {
          if (post.id === postId) {
            return resp.data;
          }
          return post;
        });
        setPosts(updatedPost);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.js ~ line 51 ~ handleLike ~ error", error);
      });
  };

  // CHAT ========================================================================================================================================

  // Get messages -------------------------------------------------------------------------
  const fetchMessages = (id_userSpeakedWith) => {
    console.log("🚀 ~ file: Blog.js ~ line 120 ~ fetchMessages ~ id_userSpeakedWith", id_userSpeakedWith, pageMessage, hasMoreMessages);
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_SERVER}/messages`,
      params: { receiver_id: userConnected.id, sender_id: id_userSpeakedWith, _sort: "id", _order: "desc", _page: pageMessage, _limit: 10 },
    })
      .then((resp) => {
        console.log("🚀 ~ file: Blog.js ~ line 132 ~ .then ~ resp", resp);
        axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_SERVER}/messages`,
          params: { sender_id: userConnected.id, receiver_id: id_userSpeakedWith, _sort: "id", _order: "desc", _page: pageMessage, _limit: 10 },
        })
          .then((response) => {
            console.log("🚀 ~ file: Blog.js ~ line 142 ~ .then ~ responseeeeeeeeeeeeeeeeeeee", response, resp);
            let copyArr = [];
            copyArr = [...messages, ...resp.data, ...response.data];
            if ((response.data.length === 0 || response.data.length < 10) && (resp.data.length === 0 || resp.data.length < 10)) {
              sethasMoreMessages(false);
              console.log("verif", (response.data.length === 0 || response.data.length < 10) && (resp.data.length === 0 || resp.data.length < 10));
            }
            setpageMessage(pageMessage + 1);
            return copyArr;
          })
          .then((copyArr) => {
            setMessages(copyArr.sort((a, b) => b.id - a.id));
          });
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.jsx ~ line 31 ~ fetchPosts ~ error", error);
      });
  };

  // Close chat
  const closeChat = () => {
    setShowChat(false);
  };

  // Add messages (POST) -------------------------------------------------------------------------
  const addMessage = (newMessage) => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_SERVER}/messages`,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(newMessage),
    })
      .then((resp) => {
        console.log("🚀 ~ file: Blog.js ~ line 131 ~ .then ~ resp", resp);
        const copyArr = [...messages, resp.data];
        setMessages(copyArr.sort((a, b) => b.id - a.id));
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.js ~ line 48 ~ addPost ~ error", error);
      });
  };

  // VIEW ---------------------------------------------------------------------------------------
  return (
    <>
      <div className="h-full bg-main-bg-fb flex-grow xl:mr-60 overflow-y-auto">
        <div className="mx-auto max-w-md 2xl:max-w-xl ">
          <AddPost addPost={addPost} />
        </div>
        <InfiniteScroll
          className="mx-auto max-w-md 2xl:max-w-xl" // centre les posts
          dataLength={posts.length}
          next={fetchPosts}
          hasMore={hasMore}
          loader={<PostLoader />}
          endMessage={<EndScroll />}
        >
          {posts.map((post) => {
            return <Post key={post.id} post={post} image={post.url} content={post.title} handleLike={handleLike} deletePost={deletePost} />;
          })}
        </InfiniteScroll>
      </div>
      <Chat user={props.userSpeakingWith} showChat={showChat} messages={messages} fetchMessages={fetchMessages} hasMoreMessages={hasMoreMessages} closeChat={closeChat} addMessage={addMessage} />
    </>
  );
};

export default Blog;
