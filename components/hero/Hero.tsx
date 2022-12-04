import Link from "next/link";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero__wrapper}>
      <div className={styles.hero}>
        <div className={styles["hero__intro"]}>
          <span className={styles["hero__intro-text"]}>Awaken</span>
          <span className={styles["hero__intro-text"]}>Your Inner</span>
          <span
            className={`${styles["hero__intro-text"]} ${styles["hero__intro-text--last"]}`}
          >
            Chef
          </span>
        </div>
        <Link href="#main" scroll={false} className={styles.hero__button}>
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Hero;
