import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import css from "./Start.module.css";

const catAnimation = require("../../images/87174-bad-cat.json");
const cowAnimation = require("../../images/78729-cow-animation.json");

export const Start = () => {
  const [shouldPlay, setShouldPlay] = useState(null);

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
        }, 2000);
      }
      if (result.includes("cow")) {
        setShouldPlay(true);
        setTimeout(() => {
          setShouldPlay("cow");
        }, 2000);
      }
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div className={css.container}>
      <div className={css.animation}>
        {shouldPlay === "cow" && <Lottie animationData={cowAnimation} />}
      </div>
      {shouldPlay === "cat" && <Lottie animationData={catAnimation} />}
    </div>
  );
};
