import { VegetarianProps } from "../../interfaces/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import styles from "./Vegetarian.module.scss";
import Card from "../ui/Card/Card";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
const VegetarianList = ({ vegetarian }: VegetarianProps) => {
  return (
    <div className={styles.vegetarian}>
      <h3 className={styles.vegetarian__title}>Popular Vegetarian Picks</h3>
      <div className={styles.vegetarian__content}>
        <Swiper
          style={{ padding: "1rem" }}
          spaceBetween={50}
          slidesPerView={3}
          modules={[FreeMode]}
          freeMode={true}
        >
          {vegetarian.map((recipe) => (
            <SwiperSlide
              style={{
                boxShadow: "5px 2px 5px 5px rgba(0,0,0,0.5)",
                borderRadius: "20px",
              }}
              key={recipe.id}
            >
              <Card {...recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.vegetarian__linkWrapper}>
        <Link className={styles.vegetarian__link} href="/categories/vegetarian">
          <span>See all</span>
          <span className={styles.vegetarian__iconWrapper}>
            <BsArrowRightShort className={styles.vegetarian__icon} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VegetarianList;
