import styles from "./Place.module.css";
import shater from "./../../assets/shater.jpg";
import RulesModa from "../../smallComponents/RulesModal/RulesModa";
import { useState } from "react";

import one from "./../../assets/one.webp";
import two from "./../../assets/two.webp";
import tree from "./../../assets/tree.webp";
import four from "./../../assets/four.webp";

import { motion, AnimatePresence } from "framer-motion";

const images = [one, two, tree, four];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // было 0.15
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 20, // было 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25, // было 0.4
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const Place = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.containerPlace}>
      <div className={styles.placeTitle}>МЕСТО ПРОВЕДЕНИЯ</div>

      <div className={styles.containerText}>
        <span className={styles.name}>Log House</span>
        <span className={styles.underName}>
          г.Нижний Новгород, Артельная 21A
        </span>

        <div className={styles.containerShaterAndText}>
          <div className={styles.containerShater}>
            <img src={shater} alt="shater" />
          </div>
        </div>

        <div className={styles.containerBtn}>
          <a
            href="https://yandex.ru/maps/org/logkhaus/1684863788/?ll=44.003480%2C56.298637&z=13"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapBtn}
          >
            Открыть на карте
          </a>
        </div>

        <div className={styles.containerNot}>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="modal"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <RulesModa isClose={() => setIsOpen(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="images"
                className={styles.containerImg}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {images.map((img, index) => (
                  <motion.div
                    key={index}
                    className={styles.imgOne}
                    variants={imageVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={img} alt={`photo-${index}`} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <p>Свадебный этикет</p>
          <span className={styles.botText} onClick={() => setIsOpen(true)}>
            Ознакомиться
          </span>
        </div>
      </div>
    </div>
  );
};

export default Place;
