import { RecipeItem } from "../../../interfaces/interfaces";
import Image from "next/image";
import styles from "./Card.module.scss";
import Link from "next/link";

const Card = ({ image, title, id }: RecipeItem) => {
  return (
    <Link href={`/categories/trends/${id}`} className={styles.card}>
      <span className={styles.card__title}>
        <p>{title}</p>
      </span>
      <figure className={styles.card__figure}>
        <Image
          quality={100}
          className={styles.card__img}
          src={image}
          alt={title}
          height={500}
          width={500}
        />
      </figure>
    </Link>
  );
};

export default Card;
