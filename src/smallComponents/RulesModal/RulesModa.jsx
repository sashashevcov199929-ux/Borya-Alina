import styles from "./RulesModa.module.css";
import { motion } from "framer-motion";
const RulesModa = ({ isClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.7, y: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={styles.modal}
    >
      {" "}
      <span className={styles.close} onClick={isClose}>
        {" "}
        X{" "}
      </span>{" "}
      <div className={styles.containerLeft}>
        {" "}
        <span>
          {" "}
          -- Не забудьте с собой улыбку — она обязательно пригодится 😊{" "}
        </span>{" "}
        <span>
          {" "}
          -- Фото на память приветствуются, селфи с котиком — опционально 🐱{" "}
        </span>{" "}
        <span>
          {" "}
          -- Секретное правило: смех заразителен, так что делитесь им щедро 😄{" "}
        </span>{" "}
        <span>
          {" "}
          -- И ласковое напоминание от нас: цветы в этот раз оставьте дома 🌸😉{" "}
        </span>{" "}
      </div>{" "}
    </motion.div>
  );
};
export default RulesModa;
