import React from "react";
import Link from "next/link";
import styles from "./CuisineItem.module.scss";
import Image from "next/image";

interface ItemProps {
  title: string;
}

const CuisineItem = ({ title }: ItemProps) => {
  return (
    <Link className={styles.cuisineLink} href={`/categories/cuisine/${title}`}>
      <div className={styles.cuisineItem}>
        <figure>
          <Image
            quality={100}
            className={styles.cuisineItem__photo}
            src={`/.././public/images/category/cuisines/${title}.jpg`}
            alt={title}
            height={900}
            width={900}
            priority={true}
          />
        </figure>
        <div className={styles.cuisineItem__title}>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CuisineItem;
