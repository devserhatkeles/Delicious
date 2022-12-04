import { ReactNode } from "react";
import styles from "./CategoryCard.module.scss";

interface CategoryCardProps {
  children: ReactNode;
}

const CategoryCard = ({ children }: CategoryCardProps) => {
  return (
    <div className={styles.categories}>
      <div className={styles.categories__itemWrapper}>{children}</div>
    </div>
  );
};

export default CategoryCard;
