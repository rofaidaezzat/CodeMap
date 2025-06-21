import React, { useState } from "react";
import "./SearchChatbot.css";
interface Props {
  onSubmit: (text: string) => void;
}

const SearchChatbot: React.FC<Props> = ({ onSubmit }) => {
    const [input, setInput] = useState("");
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("key pressed:", e.key);
    console.log("input value:", input.trim());
    if (e.key === "Enter" && input.trim()) {
        onSubmit(input);
        setInput("");
    }
  };

  return (
    <>
      <div className="galaxy-chatbot"></div>
      <div id="search-container-chatbot">
        <div className="nebula-chatbot"></div>
        <div className="starfield-chatbot"></div>
        <div className="cosmic-dust-chatbot"></div>
        <div className="cosmic-dust-chatbot"></div>
        <div className="cosmic-dust-chatbot"></div>

        <div className="stardust-chatbot"></div>

        <div className="cosmic-ring-chatbot"></div>

        <div id="main-chatbot">
          <input
            className="input-chatbot"
            name="text"
            type="text"
            placeholder="Explore the cosmos..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <div id="input-mask-chatbot"></div>
          <div id="cosmic-glow-chatbot"></div>
          <div className="wormhole-border-chatbot"></div>
          <div id="wormhole-icon-chatbot">
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#a9c7ff"
              fill="none"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <circle r="10" cy="12" cx="12"></circle>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          <div id="search-icon-chatbot">
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="url(#cosmic-search)"
              fill="none"
              height="24"
              width="24"
              viewBox="0 0 24 24"
            >
              <circle r="8" cy="11" cx="11"></circle>
              <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
              <defs>
                <linearGradient
                  gradientTransform="rotate(45)"
                  id="cosmic-search"
                >
                  <stop stopColor="#a9c7ff" offset="0%"></stop>
                  <stop stopColor="#6e8cff" offset="100%"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchChatbot;
