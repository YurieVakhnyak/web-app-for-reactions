import React, { useState } from "react";
import "./Home.css";

export function Home() {
  const [emojis, setEmojis] = useState([]);

  const emojisList = ["😃", "🤪", "😍", "🥰", "😎", "🤩", "👍", "💪"];

  function handleClick(emoji) {
    const newEmoji = {
      id: Date.now(),
      top: 0,
      left: Math.floor(Math.random() * window.innerWidth),
      emoji: emoji,
    };
    setEmojis((prevState) => [...prevState, newEmoji]);
    setTimeout(() => {
      setEmojis((prevState) =>
        prevState.filter((emoji) => emoji.id !== newEmoji.id)
      );
    }, 5000);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="emoji-buttons">
          {emojisList.map((emoji) => (
            <button
              key={emoji}
              className="emoji-button"
              onClick={() => handleClick(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
        {emojis.map((emoji) => (
          <div
            key={emoji.id}
            style={{
              position: "absolute",
              fontSize: "2rem",
              top: window.innerHeight,
              left: emoji.left,
            }}
            className="animate"
          >
            {emoji.emoji}
          </div>
        ))}
      </header>
    </div>
  );
}
