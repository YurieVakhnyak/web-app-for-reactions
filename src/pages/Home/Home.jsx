import React, { useState, useEffect } from "react";
import "./Home.css";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function Home() {
  const [emojis, setEmojis] = useState([]);
  const options = {
    lang: "ru-RU",
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition(options);

  const emojisList = ["😃", "🤪", "😍", "😢", "😎", "😠", "👍", "💪"];
  function createEmoji(emoji) {
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

  function includeWord(str) {
    let emoji = "😃";
    if (str.includes("smile")) {
      createEmoji(emoji);
    }
    if (str.includes("sad")) {
      emoji = "😢";
      createEmoji(emoji);
    }
    if (str.includes("angry")) {
      emoji = "😠";
      createEmoji(emoji);
    }
    if (str.includes("like")) {
      emoji = "👍";
      createEmoji(emoji);
    }
    if (str.includes("strong")) {
      emoji = "💪";
      createEmoji(emoji);
    }
    return null;
  }

  function handleClick(emoji) {
    console.log(emoji);
    createEmoji(emoji);
  }

  useEffect(() => {
    includeWord(transcript);
  }, [transcript]);

  return (
    <div className="App">
      <header className="App-header">
        {!browserSupportsSpeechRecognition ? (
          <span>Browser doesn't support speech recognition.</span>
        ) : (
          <div>
            <p>Microphone: {listening ? "on" : "off"}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
          </div>
        )}

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
