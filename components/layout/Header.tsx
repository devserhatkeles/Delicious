import Link from "next/link";
import { GiKnifeFork } from "react-icons/gi";
import styles from "./Layout.module.scss";
const Header = () => {
  return (
    <header className={styles["header"]}>
      <Link href="/" className={styles.logo}>
        <GiKnifeFork className={styles.logo__icon} />
        <span className={styles.logo__title}>delicious</span>
      </Link>
      <nav className={styles["header__navbar"]}>
        <div className={styles["header__navbar-links"]}>
          <Link className={styles["header__navbar-links--link"]} href="/">
            Home
          </Link>
          <Link
            className={styles["header__navbar-links--link"]}
            href="/categories"
          >
            Categories
          </Link>
          <Link className={styles["header__navbar-links--link"]} href="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
