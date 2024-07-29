import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Swiper.module.scss";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Order } from "./Order Now/Order";
import classNames from "classnames";

export const Slider: React.FC = () => {
  return (
    <div>
      <section className={`${styles.page__main} ${styles.main}`}>
        <h1 className={styles.main__title}>Welcome to Nice Gadgets store!</h1>
      </section>

      <div className={`main__swiper ${styles.swiper}`}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper__Button__Next",
            prevEl: ".swiper__Button__Prev",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className={styles.swiper__slide}>
            <Order />
            <a
              className={`${styles.swiper__image} ${
                styles[`swiper__image--1`]
              }`}
            ></a>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <div
              className={`${styles.swiper__wrapper} ${styles["swiper__wrapper--1"]} `}
            >
              <a
                className={`${styles.swiper__image} ${
                  styles[`swiper__image--2`]
                }`}
              ></a>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiper__slide}>
            <div
              className={`${styles.swiper__wrapper} ${styles["swiper__wrapper--2"]} `}
            >
              <a
                className={`${styles.swiper__image} ${
                  styles[`swiper__image--3`]
                }`}
              ></a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={classNames("swiper__Button__Prev", styles.swiper__prev)}>
          <img
            src="src\images\icons\Chevron (Arrow Left).png"
            alt="Prev"
            className={styles.overlayImage}
          />
        </div>
        <div className={classNames("swiper__Button__Next", styles.swiper__next)} >
          <img className={styles.overlayImage} src="src\images\icons\Chevron (Arrow Right).png" alt="Next" />
        </div>
      </div>
    </div>
  );
};
