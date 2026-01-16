import styles from "./Time.module.css";
import Rings from "./../../smallComponents/rings/Rings";
import VerticalLine from "./../../smallComponents/VerticalLine/VerticalLine";
import { Clock, Heart, Wine, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const Time = () => {
  const timelineItems = [
    { time: "15:30", text: "Сбор гостей", icon: <Clock /> },
    { time: "16:00", text: "Начало церемонии", icon: <Heart /> },
    { time: "17:00", text: "Праздничный банкет", icon: <Wine /> },
    { time: "21:00", text: "Финал. Танцпол", icon: <PartyPopper /> },
  ];

  // Варианты для анимации полоски
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "90px", // должна совпадать с высотой boxCenter
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className={styles.containerTime}>
      <span className={styles.timeTittle}>ТАЙМИНГ</span>
      <div className={styles.containerRings}>
        <Rings />

        <div className={styles.containerColumn}>
          <div className={styles.containerLeft}>
            {timelineItems.map((item, i) => (
              <span key={i} className={styles.boxLeft}>
                {item.icon}
                {item.time}
              </span>
            ))}
          </div>

          <div className={styles.containerCenter}>
            {timelineItems.map((_, i) => (
              <motion.span
                key={i}
                className={styles.boxCenter}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <VerticalLine />
              </motion.span>
            ))}
          </div>

          <div className={styles.containerRight}>
            {timelineItems.map((item, i) => (
              <span key={i} className={styles.boxRight}>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
