import { useState, useEffect, MouseEventHandler } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import styles from "./ButtonUp.module.scss";

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop: MouseEventHandler = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  });

  return (
    <>
      {isVisible ? (
        <div onClick={scrollTop} className={styles.upButton}>
          <BsArrowUpShort className={styles.upButton__icon} />
        </div>
      ) : null}
    </>
  );
};

export default ButtonUp;
