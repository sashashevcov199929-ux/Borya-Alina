import styles from "./Rings.module.css";

const Rings = () => {
  return (
    <svg
      className={styles.rings}
      width="130"
      height="110"
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Бриллиант */}
      <polygon
        points="100,15 110,30 100,45 90,30"
        fill="#ffffff"
        className={styles.diamond}
      />

      {/* Кольца */}
      <circle
        cx="85"
        cy="80"
        r="35"
        stroke=" #c66e4e"
        strokeWidth="6"
        className={styles.leftRing}
      />
      <circle
        cx="115"
        cy="80"
        r="35"
        stroke=" #c66e4e"
        strokeWidth="6"
        className={styles.rightRing}
      />
    </svg>
  );
};

export default Rings;
