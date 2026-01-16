import { useState, useRef, useEffect } from "react";
import styles from "./MusicPlayer.module.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

const MusicPlayer = ({ src, scrollToNext }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      if (!audio.duration) return;
      setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTime(formatTime(audio.currentTime));
      setDuration(formatTime(audio.duration));
    };

    audio.addEventListener("timeupdate", updateProgress);

    audio.addEventListener("loadedmetadata", () => {
      setDuration(formatTime(audio.duration));
    });

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play().catch(() => {
        console.log("Autoplay blocked, нажми Play");
      });
      setIsPlaying(true);

      // Скроллим на следующую секцию
      if (scrollToNext) scrollToNext();
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.playerContainer}>
      <audio ref={audioRef} src={src} loop />
      <button className={styles.playBtn} onClick={togglePlay}>
        {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
      </button>
      <div className={styles.progressWrapper}>
        <span className={styles.time}>{currentTime}</span>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className={styles.time}>{duration}</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
