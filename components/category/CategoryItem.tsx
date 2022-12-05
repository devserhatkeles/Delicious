import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryItem.module.scss";

interface ItemProps {
  title: string;
}
const CategoryItem = ({ title }: ItemProps) => {
  return (
    <Link className={styles.categoryLink} href={`/categories/${title}`}>
      <div className={styles.categoryItem}>
        <figure>
          <Image
            quality={100}
            className={styles.categoryItem__photo}
            src={`/images/category/${title}.jpg`}
            alt={title}
            height={700}
            width={700}
            priority={true}
          />
        </figure>
        <div className={styles.categoryItem__title}>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
