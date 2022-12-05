import { useState } from "react";
import Image from "next/image";
import styles from "./Details.module.scss";
import { DetailsItem } from "../../interfaces/interfaces";

const DetailsCard = ({
  title,
  image,
  summary,
  instructions,
  readyInMinutes,
  extendedIngredients,
  healthScore,
}: DetailsItem) => {
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
        <div className={styles.details__info}>
          <figure className={styles.details__image}>
            <Image src={image} height={1000} width={1000} alt={title} />
          </figure>
          <div className={styles.details__review}>
            <div className={styles["details__review--item"]}>
              <span>{extendedIngredients.length}</span>
              <p>Ingredients</p>
            </div>
            <div
              className={`${styles["details__review--item"]} ${styles["details__review--time"]}`}
            >
              <span>{readyInMinutes}</span>
              <p>Minutes</p>
            </div>
            <div className={styles["details__review--item"]}>
              <span>{healthScore}</span>
              <p>Health Score</p>
            </div>
          </div>
        </div>
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
