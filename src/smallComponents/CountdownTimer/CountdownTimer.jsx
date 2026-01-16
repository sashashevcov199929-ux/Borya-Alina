import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.timer}>
      <span className={styles.timerTitle}>До свадьбы осталось:</span>

      {timeLeft ? (
        <div className={styles.timerNumbers}>
          <span>{timeLeft.days} д</span>
          <span>{timeLeft.hours} ч</span>
          <span>{timeLeft.minutes} м</span>
          <span>{timeLeft.seconds} с</span>
        </div>
      ) : (
        <span className={styles.today}></span>
      )}
    </div>
  );
};

export default CountdownTimer;
