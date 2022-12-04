import { Swiper, SwiperSlide } from "swiper/react";
import { TrendProps } from "../../interfaces/interfaces";
import styles from "./Trends.module.scss";
import "swiper/scss";
import "swiper/scss/free-mode";
import { FreeMode } from "swiper";
import Card from "../ui/Card/Card";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
const TrendingList = ({ trends }: TrendProps) => {
  return (
    <div className={styles.trend}>
      <h3 className={styles.trend__title}>Popular Picks</h3>
      <div className={styles.trend__content}>
        <Swiper
          style={{ padding: "1rem" }}
          spaceBetween={50}
          slidesPerView={4}
          modules={[FreeMode]}
          freeMode={true}
        >
          {trends.map((recipe) => (
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
      <div className={styles.trend__linkWrapper}>
        <Link className={styles.trend__link} href="/categories">
          <span>See all</span>
          <span className={styles.trend__iconWrapper}>
            <BsArrowRightShort className={styles.trend__icon} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TrendingList;
