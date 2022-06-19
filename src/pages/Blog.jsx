import axios from "axios";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, EndScroll, CardLoader } from "../components";

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
      url: `http://localhost:3002/posts`,
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
              <CardLoader /> <CardLoader />
            </>
          ) : (
            <CardLoader />
          )
        }
        endMessage={<EndScroll />}
      >
        {posts.map((post) => {
          // let username = findUser(post.userId);
          return <Card key={post.id} title={post.title} image={post.url} content={post.title} userName="aaa" userId={post.userId} userImage="/Abdoul.jpg" />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Blog;
