import styles from "./Cheers.module.css";

const Cheers = () => {
  return (
    <div className={styles.wrapper}>
      <svg
        viewBox="0 0 512 512"
        className={styles.svg}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M128 32h96l-16 176c-4 40-36 72-76 72s-72-32-76-72L128 32z"
          stroke="#c8b27a"
          strokeWidth="12"
        />
        <path d="M160 280v128" stroke="#c8b27a" strokeWidth="12" />
        <path d="M112 408h96" stroke="#c8b27a" strokeWidth="12" />

        <g className={styles.right}>
          <path
            d="M288 32h96l-16 176c-4 40-36 72-76 72s-72-32-76-72L288 32z"
            stroke="#c8b27a"
            strokeWidth="12"
          />
          <path d="M320 280v128" stroke="#c8b27a" strokeWidth="12" />
          <path d="M272 408h96" stroke="#c8b27a" strokeWidth="12" />
        </g>
      </svg>
    </div>
  );
};

export default Cheers;
