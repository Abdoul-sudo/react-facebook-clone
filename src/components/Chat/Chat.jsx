import React from "react";
import { UserProfile, CommentLoader } from "../index";
import { IoMdClose } from "react-icons/io";
import InfiniteScroll from "react-infinite-scroll-component";
import { Message, AddMessage } from "../index";

const Chat = ({ user, messages, showChat, fetchMessages, hasMoreMessages, closeChat, addMessage }) => {
  console.log("🚀 ~ file: Chat.jsx ~ line 8 ~ Chat ~ messages", messages);
  return (
    <>
      {showChat && (
        <div className="block bg-white mt-5 rounded-lg shadow-sm fixed right-10 bottom-1 md:w-80 2xl:w-96 md:h-96 2xl:h-32rem mb-11">
          {/* En-tête ---------------------------------------------------------------------------*/}
          <div className="flex items-center justify-between space-x-2 px-5 py-2 border-b shadow-sm">
            <div className="flex items-center space-x-2">
              <UserProfile user={user} size="35" isConnected={true} />
              <div className="font-medium">{user.username}</div>
            </div>
            <button className="text-blue-600 rounded-full p-1 hover:bg-gray-100" onClick={closeChat}>
              <IoMdClose size={20} />
            </button>
          </div>

          {/* Content ---------------------------------------------------------------------------*/}
          <div className="h-full w-full bg-white flex-grow xl:mr-60 pb-20">
            <div
              id="scrollableDiv"
              style={{
                height: "100%",
                overflow: "auto",
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              <InfiniteScroll
                className="mx-auto max-w-xl md:max-w-xl" // centre les posts
                dataLength={messages.length}
                next={() => fetchMessages(user.id)}
                style={{ display: "flex", flexDirection: "column-reverse" }}
                inverse={true}
                hasMore={hasMoreMessages}
                loader={
                  <span className="flex justify-center">
                    <CommentLoader />
                  </span>
                }
                endMessage={<span></span>}
                scrollableTarget="scrollableDiv"
              >
                {messages.map((message) => {
                  return <Message key={message.id} message={message} userSpeakingWith={user} />;
                })}
              </InfiniteScroll>
            </div>

            {/* Input ---------------------------------------------------------------------------*/}
            <AddMessage addMessage={addMessage} userSpeakingWith={user} />
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
