import React, { useState, useEffect } from "react";
import { includeWord, createEmoji } from "../../functions/functions";
import styles from "./Home.module.css";

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

  function handleClick(emoji) {
    console.log(emoji);
    createEmoji(emoji, setEmojis);
  }

  useEffect(() => {
    // eslint-disable-next-line
    includeWord(transcript, setEmojis);
  }, [transcript]);

  return (
    <div className={styles.homeContainer}>
      <header className="App-header">
        {!browserSupportsSpeechRecognition ? (
          <span>Browser doesn't support speech recognition.</span>
        ) : (
          <div>
            <p>
              Try to say keywords: 'smile', 'like', 'sad', 'strong' after
              clicking the 'start' button
            </p>
            <p>Microphone: {listening ? "on" : "off"}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
          </div>
        )}

        <div>
          {emojisList.map((emoji) => (
            <button
              key={emoji}
              className={styles.emojiButton}
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
            className={styles.animate}
          >
            {emoji.emoji}
          </div>
        ))}
      </header>
    </div>
  );
}
