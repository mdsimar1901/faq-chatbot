import React from "react";

interface MessageViewProps {
  text: string;
}

function MessageView({text}: MessageViewProps){
  return (
    <div className="text-white text-sm w-48 mb-2 p-2 rounded-lg self-start text-left break-words whitespace-pre-wrap bg-purple-700">
      <div className="flex gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 pink-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <div className="bg-pink-700 text-white p-2 rounded-lg">{text}</div>
      </div>
    </div>
  );
};

export default MessageView;