import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";

interface MessageProps {
  message: {
    text: string;
    user: boolean;
  };
  index: number;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
  handleClick: (index: number) => void;
}

function Message({
  message,
  index,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}: MessageProps) {
  const isUserMessage = message.user;
  const messageBackgroundColor = isUserMessage ? "bg-gray-300" : "bg-purple-700";
  const messageTextColor = isUserMessage ? "text-black" : "text-white";
  const cursorStyle = isUserMessage ? "cursor-auto" : "cursor-pointer";

  const handleMouseEnterMessage = () => {
    handleMouseEnter(index);
  };

  const handleMouseLeaveMessage = () => {
    handleMouseLeave();
  };

  const handleClickMessage = () => {
    handleClick(index);
  };

  return (
    <div
      key={index}
      onMouseEnter={handleMouseEnterMessage}
      onMouseLeave={handleMouseLeaveMessage}
      onClick={handleClickMessage}
      className={`flex ${
        isUserMessage ? "flex-row-reverse" : "flex-row"
      } gap-3 mt-10 mb-20 relative`}
    >
      {!isUserMessage && <FaceIcon className="text-purple-700" />}

      <div
        className={`text-12px w-fit-content max-w-260px p-10 rounded-lg break-words whitespace-pre-wrap flex ${messageBackgroundColor} ${messageTextColor} ${cursorStyle} relative`}
      >
        {message.text}
      </div>
    </div>
  );
}

interface MessagesProps {
  messages: {
    text: string;
    user: boolean;
  }[];
  setCustomInput: (text: string) => void;
}

function Messages({ messages, setCustomInput }: MessagesProps) {
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredMessageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredMessageIndex(-1); // Clear hover state when leaving any message
  };

  const handleClick = (index: number) => {
    setCustomInput(messages[index].text);
  };

  return (
    <div className="flex flex-col gap-20">
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message}
          index={index}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Messages;
