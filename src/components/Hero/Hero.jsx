import styles from "./Hero.module.css";

import hero from "./../../assets/hero2.jpg";

import MusicPlayer from "./../MusicPlayer/MusicPlayer";

import mot from "./../../assets/mot.mp3";

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".section2");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.containerHero}>
      <div className={styles.heroImage}>
        <img src={hero} alt="герои" />
      </div>

      <div className={styles.heroTextContainer}>
        <span className={styles.text}>Borya & Alina</span>
        <span className={styles.underText}>SOON</span>
      </div>
      <div className={styles.player}>
        <MusicPlayer src={mot} scrollToNext={scrollToNextSection} />
      </div>
    </div>
  );
};

export default Hero;
