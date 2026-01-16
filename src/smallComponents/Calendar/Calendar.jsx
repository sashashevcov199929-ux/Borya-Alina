import styles from "./Calendar.module.css";

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <div className={styles.day}>
        <span className={styles.weekday}>ПН</span>
        <span className={styles.date}>27</span>
      </div>

      <div className={styles.day}>
        <span className={styles.weekday}>ВТ</span>
        <span className={styles.date}>28</span>
      </div>

      <div className={styles.day}>
        <span className={styles.weekday}>СР</span>
        <span className={styles.date}>29</span>
      </div>

      <div className={styles.day}>
        <span className={styles.weekday}>ЧТ</span>
        <span className={styles.date}>30</span>
      </div>

      <div className={styles.day}>
        <span className={styles.weekday}>ПТ</span>
        <span className={styles.date}>31</span>
      </div>

      <div className={styles.dayShwet}>
        <span className={styles.weekday}>СБ</span>
        <span className={styles.date}>1</span>
      </div>

      <div className={styles.day}>
        <span className={styles.weekday}>ВС</span>
        <span className={styles.date}>2</span>
      </div>
    </div>
  );
};

export default Calendar;
