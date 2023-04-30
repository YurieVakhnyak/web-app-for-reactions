import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import css from "./Start.module.css";

const catAnimation = require("../../images/87174-bad-cat.json");
const cowAnimation = require("../../images/78729-cow-animation.json");

export const Start = () => {
  const [shouldPlay, setShouldPlay] = useState("");

  useEffect(() => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();

    recognition.lang = "en-US";

    recognition.onresult = function (event) {
      const result = event.results[0][0].transcript;
      if (result.includes("cat")) {
        setShouldPlay(true);
        setTimeout(() => {
          setShouldPlay("cat");
        }, 1000);
      }
      if (result.includes("cow")) {
        setShouldPlay(true);
        setTimeout(() => {
          setShouldPlay("cow");
        }, 1000);
      }
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div className={css.container}>
      <p>
        "If you say 'cat' or 'cow' while working microphone (red dot on the tab
        appears after refreshing the page), the cat or cow animation will
        appear."
      </p>
      <div>
        <p>Text: {shouldPlay}</p>
      </div>
      <div className={css.animation}>
        {shouldPlay === "cow" && <Lottie animationData={cowAnimation} />}
      </div>
      {shouldPlay === "cat" && <Lottie animationData={catAnimation} />}
    </div>
  );
};
