import axios from "axios";
import postcss from "postcss";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post, EndScroll, PostLoader } from "../components";

const Blog = (props) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([{ 1: "sds" }]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(1);

  // On load la page 1 when componentDidMount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios({
      method: "GET",
      url: `http://localhost:${process.env.REACT_APP_API_PORT}/posts`,
      params: { _page: page, _limit: props.limit },
    })
      .then((resp) => {
        setPosts([...posts, ...resp.data]);
        if (resp.length === 0 || resp.length < props.limit) {
          sethasMore(false);
        }
        setpage(page + 1);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.jsx ~ line 31 ~ fetchPosts ~ error", error);
      });
  };

  const handleLike = (postId) => {
    const post = posts.find((post) => post.id === postId);
    post.isLiked = !post.isLiked;

    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_PORT}/posts/${postId}`,
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
        console.log("🚀 ~****************** file: Blog.js ~ line 54 ~ updatedPost ~ updatedPost", updatedPost);
        setPosts(updatedPost);
        // setpage(page + 1);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Blog.js ~ line 51 ~ handleLike ~ error", error);
      });
  };
  return (
    <div className="h-full pb-44 pt-6 bg-main-bg-fb flex-grow xl:mr-40 overflow-y-auto">
      <InfiniteScroll
        className="bg-main-bg-fb mx-auto max-w-md md:max-w-lg" // centre les posts
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={
          page === 1 ? (
            <>
              <PostLoader /> <PostLoader />
            </>
          ) : (
            <PostLoader />
          )
        }
        endMessage={<EndScroll />}
      >
        {posts.map((post) => {
          // let username = findUser(post.userId);
          return <Post key={post.id} post={post} image={post.url} content={post.title} userId={post.userId} handleLike={handleLike} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Blog;
