import Link from "next/link";
import Image from "next/image";
import styles from "./CuisineItem.module.scss";
import { BsArrowRightShort } from "react-icons/bs";

interface ItemTypeProps {
  title: string;
  image: string;
  href: string;
}

const CuisineType = ({ title, image, href }: ItemTypeProps) => {
  return (
    <div className={styles.cuisineType__wrapper}>
      <div className={styles.cuisineTypeItem}>
        <figure>
          <Image
            quality={100}
            className={styles.cuisineTypeItem__photo}
            src={image}
            alt={title}
            height={900}
            width={900}
          />
        </figure>
        <div className={styles.cuisineTypeItem__title}>
          <p>{title}</p>
          <Link href={href}>
            <span>View</span>
            <BsArrowRightShort className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CuisineType;
