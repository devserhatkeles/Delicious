import Link from "next/link";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styles from "./HomeCategories.module.scss";

const HomeCategories = () => {
  return (
    <div className={styles.homeCategories}>
      <Link
        href="/categories/cuisine/italian"
        className={styles.homeCategories__item}
      >
        <span className={styles["homeCategories__item-iconWrapper"]}>
          <FaPizzaSlice className={styles["homeCategories__item-icon"]} />
        </span>
        <span className={styles["homeCategories__item-title"]}>Italian</span>
      </Link>
      <Link
        href="/categories/cuisine/american"
        className={styles.homeCategories__item}
      >
        <span className={styles["homeCategories__item-iconWrapper"]}>
          <FaHamburger className={styles["homeCategories__item-icon"]} />
        </span>
        <span className={styles["homeCategories__item-title"]}>American</span>
      </Link>
      <Link
        href="/categories/cuisine/thai"
        className={styles.homeCategories__item}
      >
        <span className={styles["homeCategories__item-iconWrapper"]}>
          <GiNoodles className={styles["homeCategories__item-icon"]} />
        </span>
        <span className={styles["homeCategories__item-title"]}>Thai</span>
      </Link>
      <Link
        href="/categories/cuisine/japanese"
        className={styles.homeCategories__item}
      >
        <span className={styles["homeCategories__item-iconWrapper"]}>
          <GiChopsticks className={styles["homeCategories__item-icon"]} />
        </span>
        <span className={styles["homeCategories__item-title"]}>Japanese</span>
      </Link>
    </div>
  );
};

export default HomeCategories;
