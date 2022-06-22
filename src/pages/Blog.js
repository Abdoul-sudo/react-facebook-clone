import axios from "axios";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post, EndScroll, PostLoader, AddPost } from "../components";

const Blog = (props) => {
  const [posts, setPosts] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(1);

  // POSTS  ---------------------------------------------------------------------------------------
  useEffect(() => {
    fetchPosts();
  }, []);

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

  // POST
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

  // VIEW ---------------------------------------------------------------------------------------
  return (
    <div className="h-full bg-main-bg-fb flex-grow xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg">
        <AddPost addPost={addPost} />
      </div>
      <InfiniteScroll
        className="mx-auto max-w-md md:max-w-lg" // centre les posts
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<PostLoader />}
        endMessage={<EndScroll />}
      >
        {posts.map((post) => {
          return <Post key={post.id} post={post} image={post.url} content={post.title} handleLike={handleLike} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Blog;
