import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../images/87174-bad-cat.json";
import meowSound from "../../audio/Cute-cat-meow-sound.mp3";
import styles from "./Animation.module.css";

export const Animation = () => {
  const animationContainer = useRef(null);
  const audioElement = useRef(null);
  const [anim, setAnim] = useState(null);

  useEffect(() => {
    const newAnim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animationData,
    });

    newAnim.addEventListener("complete", () => {
      audioElement.current.play();
    });

    setAnim(newAnim);

    return () => newAnim.destroy();
  }, []);

  const handleAnimationClick = () => {
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    audioElement.current.play();
    anim && anim.goToAndPlay(0);
  };

  return (
    <div className={styles.animationContainer} onClick={handleAnimationClick}>
      <div className={styles.animation} ref={animationContainer} />
      <p>Click the Cat</p>
      <audio ref={audioElement} src={meowSound} />
    </div>
  );
};
