import { useRef } from "react";
import styles from "../styles/surahs.module.scss";
const Surah = ({ text, audio, arabic }) => {
  const audioRef = useRef();
  const autoplay = () => {
    console.dir(audioRef.current);
    if (audioRef.current.paused) return audioRef.current.play();
    audioRef.current.pause();
  };
  return (
    <>
      <span onClick={autoplay}>
        <p className={styles.paragraf}>{text}</p>
        <p className={styles.arabic_paragraf}>{arabic}</p>
      </span>
      <audio
        className={styles.surah}
        controls
        ref={audioRef}
        src={audio}
      ></audio>
    </>
  );
};
export default Surah;