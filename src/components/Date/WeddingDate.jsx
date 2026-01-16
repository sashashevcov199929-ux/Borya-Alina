import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Calendar from "../../smallComponents/Calendar/Calendar";
import CountdownTimer from "../../smallComponents/CountdownTimer/CountdownTimer";
import styles from "./WeddingDate.module.css";

const WeddingDate = () => {
  const weddingDate = new Date(2026, 7, 1, 15, 30, 0);

  // реф для скролла
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  // проверяем, когда блоки в зоне видимости
  const topInView = useInView(topRef, { once: true, margin: "-50px" });
  const bottomInView = useInView(bottomRef, { once: true, margin: "-50px" });

  const topVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className={styles.containerDate}>
      {/* Верхний блок с анимацией сверху вниз */}
      <motion.div
        ref={topRef}
        className={styles.containerText}
        variants={topVariants}
        initial="hidden"
        animate={topInView ? "visible" : "hidden"}
      >
        <span className={styles.textTop}>Дорогие и близкие!</span>
        <span className={styles.textCenter}>
          Мы хотим разделить с вами один из самых
          <br />
          важных и радостных дней в нашей жизни-
          <br />
          праздник настоящей любви.
          <br />
        </span>
        <span className={styles.textBottom}>
          Приглашаем вас стать частью
          <br />
          нашей свадьбы!
        </span>
      </motion.div>

      <div className={styles.avgust}>Август 2026</div>

      {/* Нижний блок с анимацией снизу вверх */}
      <motion.div
        ref={bottomRef}
        className={styles.containerCalendar}
        variants={bottomVariants}
        initial="hidden"
        animate={bottomInView ? "visible" : "hidden"}
      >
        <Calendar />
        <CountdownTimer targetDate={weddingDate} />
      </motion.div>
    </div>
  );
};

export default WeddingDate;
