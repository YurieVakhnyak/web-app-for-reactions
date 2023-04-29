import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const Dictaphone = () => {
  const [output, setOutput] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  useEffect(() => {
    const wordCount = (transcript.match(/sorry/g) || []).length;
    if (wordCount > 0) {
      let output = " SORRY ".repeat(wordCount);

      setOutput(output);
    }

    console.log("wordCount:", wordCount);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={startListening}>Start continuous listening</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={SpeechRecognition.abortListening}>Abort</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <p>{output}</p>
    </div>
  );
};

// import React from "react";
// import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

// const appId = "<INSERT_SPEECHLY_APP_ID_HERE>";
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

// export const Dictaphone = () => {
//   const { transcript, listening, browserSupportsSpeechRecognition } =
//     useSpeechRecognition();
//   const startListening = () =>
//     SpeechRecognition.startListening({ continuous: true });

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   return (
//     <div>
//       <p>Microphone: {listening ? "on" : "off"}</p>
//       <button
//         onTouchStart={startListening}
//         onMouseDown={startListening}
//         onTouchEnd={SpeechRecognition.stopListening}
//         onMouseUp={SpeechRecognition.stopListening}
//       >
//         Hold to talk
//       </button>
//       <p>{transcript}</p>
//     </div>
//   );
// };
