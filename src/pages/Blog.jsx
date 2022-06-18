import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, EndScroll, Loader, EmptyCards } from "../components";

const Blog = (props) => {
  const [posts, setPosts] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(1);

  const fetchPosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${props.limit}`
      // For json server use url below
      // `http://localhost:3004/comments?_page=${page}&_limit=20`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const newPosts = await fetchPosts();

    setPosts([...posts, ...newPosts]);
    if (newPosts.length === 0 || newPosts.length < props.limit) {
      sethasMore(false);
    }
    setpage(page + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full pb-44 pt-6 mr-4 bg-main-bg-fb flex-grow xl:mr-40 overflow-y-auto">
      <InfiniteScroll
        className="bg-main-bg-fb"
        dataLength={posts.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={
          page === 1 ? (
            <>
              <EmptyCards /> <EmptyCards />
            </>
          ) : (
            <EmptyCards />
          )
        }
        endMessage={<EndScroll />}
      >
        <div className="mx-auto max-w-md md:max-w-lg">
          {posts.map((post) => {
            return <Card key={post.id} title={post.title} image={post.url} content={post.title} userName="Abdoul Wahhaab" userImage="/Abdoul.jpg" />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Blog;
