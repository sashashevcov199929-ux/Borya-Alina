import styles from "./Foto.module.css";
import { motion } from "framer-motion";
import wenddingTwo from "./../../assets/wenddingTwo.jpg";
import wenddingTree from "./../../assets/wenddingTree.jpg";
import wenddingFour from "./../../assets/wenddingFour.jpg";
import wenddingOne from "./../../assets/wenddingOne.jpg";
import wenddingFive from "./../../assets/wenddingFive.jpg";
import wenddingSix from "./../../assets/wenddingSix.jpg";

const Foto = () => {
  const photos = [
    wenddingOne,
    wenddingTwo,
    wenddingTree,
    wenddingFour,
    wenddingFive,
    wenddingSix,
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const photoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className={styles.containerFoto}>
      <span className={styles.fotoTittle}>До встречи</span>

      <motion.div
        className={styles.containerRsvp}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>
          Мы очень рады разделить с нами один из самых счастливых дней в нашей
          жизни.
          <br /> Будем счастливы видеть каждого из вас на нашем празднике любви,
          радости и смеха! <br />
          Подготовьтесь к веселью, музыке, вкусной еде и незабываемым эмоциям.
          <br />
          До встречи на свадьбе, будем вас ждать с нетерпением! 🤍
        </p>
      </motion.div>

      {/* 🔹 Блок с фотографиями */}
      <motion.div
        className={styles.containerAllFoto}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {photos.map((img, index) => (
          <motion.div
            key={index}
            className={styles.photoBox}
            variants={photoVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src={img} alt={`wedding-${index}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Foto;
