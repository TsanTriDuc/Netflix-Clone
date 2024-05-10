import "./index.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/ciizJ9Okzt9tBBGK7Q3T14LFT2j.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/j5aOOtsJinQtyRaqiB12TTRHdeX.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg"
            alt=""
          />
        </SwiperSlide>
        /
      </Swiper>
    </div>
  );
}
