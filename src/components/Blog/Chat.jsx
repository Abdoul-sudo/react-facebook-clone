import React from "react";
import { useStateContext } from "../../context/GlobalContextProvider";
import { UserProfile } from "../index";
import { IoMdClose } from "react-icons/io";

const Chat = ({ showChat }) => {
  const { userConnected } = useStateContext();
  return (
    <>
      {showChat && (
        <div className="block bg-white mt-5 rounded-lg shadow-sm fixed right-10 bottom-1 md:w-80 2xl:w-96 md:h-96 2xl:h-32rem">
          {/* En-tête ---------------------------------------------------------------------------*/}
          <div className="flex items-center justify-between space-x-2 px-5 py-2 border-b shadow-sm">
            <div className="flex items-center space-x-2">
              <UserProfile user={userConnected} size="35" isConnected={true} />
              <div className="font-medium">{userConnected.username}</div>
            </div>
            <button className="text-blue-600 rounded-full p-1 hover:bg-gray-100">
              <IoMdClose size={20} />
            </button>
          </div>
          {/* </div> */}

          {/* image */}
          {/* <div className="h-full bg-main-bg-fb flex-grow xl:mr-60 overflow-y-auto">
            <div className="mx-auto max-w-xl md:max-w-xl">
              <AddPost addPost={addPost} />
            </div>
            <div
              id="scrollableDiv"
              style={{
                height: 300,
                background: "red",
                overflow: "auto",
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              <InfiniteScroll
                className="mx-auto max-w-xl md:max-w-xl" // centre les posts
                dataLength={posts.length}
                next={fetchPosts}
                style={{ display: "flex", flexDirection: "column-reverse" }}
                inverse={true}
                hasMore={hasMore}
                loader={<PostLoader />}
                endMessage={<EndScroll />}
                scrollableTarget="scrollableDiv"
              >
                {posts.map((post) => {
                  return <Post key={post.id} post={post} image={post.url} content={post.title} handleLike={handleLike} />;
                })}
              </InfiniteScroll>
            </div>
          </div> */}

          {/* buttons */}
          <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-sm text-gray-400 border-t">
            <div className="inputIconSqueletton rounded-none rounded-bl-2xl">
              <div className="bg-gray-300 w-24 h-7 rounded-2xl animate-pulse"></div>
            </div>
            <div className="inputIconSqueletton rounded-none">
              <div className="bg-gray-300 w-24 h-7 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
