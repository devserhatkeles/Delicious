import { useState } from "react";
import Image from "next/image";
import styles from "./Details.module.scss";
import { DetailsProps } from "../../interfaces/interfaces";

const DetailsCard = ({ title, image, summary, instructions }: DetailsProps) => {
  const [isDefault, setIsDefault] = useState(true);
  return (
    <div className={styles.details}>
      <div className={styles.details__wrapper}>
        <span className={styles.details__title}>{title}</span>
        <div className={styles.details__btnBox}>
          <button
            onClick={() => setIsDefault(true)}
            className={`${styles["details__btn"]} ${
              isDefault ? styles["active"] : null
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setIsDefault(false)}
            className={`${styles["details__btn"]} ${
              !isDefault ? styles["active"] : null
            }`}
          >
            Instructions
          </button>
        </div>
        <figure className={styles.details__image}>
          <Image src={image} height={1000} width={1000} alt={title} />
        </figure>
        <div className={styles.details__content}>
          {isDefault ? (
            <div
              className={styles.details__summary}
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          ) : (
            <div
              className={styles.details__instructions}
              dangerouslySetInnerHTML={{ __html: instructions }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
