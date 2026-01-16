import styles from "./Drees.module.css";
import woman from "./../../assets/dresswoman.webp";
import man from "./../../assets/dressman.jpeg";

const Drees = () => {
  return (
    <div className={styles.containerDrees}>
      <span className={styles.dreesTitle}>Стиль</span>
      <div className={styles.containerUnderTittle}>
        <span className={styles.textTittle}>Дорогие гости</span>
        <span className={styles.text}>
          Нам будет приятно видеть джентльменов
          <br />
          в классических костюмах: чёрный низ, чёрный или белый верх.
          <br />
          Дам - будем рады видеть в чёрных платьях
          <br />
          или нарядах тёмных оттенков.
        </span>
      </div>

      <div className={styles.containerBottom}>
        <div className={styles.containerWoman}>
          <img src={woman} alt="" />
        </div>
        <div className={styles.containerBoys}>
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Drees;
