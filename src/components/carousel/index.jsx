/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./index.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Carousel({
  numberOfSlide,
  category,
  autoplay = false,
}) {
  const [movies, setMovies] = useState([]);
  const fetchMoive = async () => {
    const response = await axios.get(
      "https://6633ee64f7d50bbd9b4b1fef.mockapi.io/Movie"
    );
    console.log(response.data);
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMoive();
  }, []);
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={numberOfSlide}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={autoplay ? [Pagination, Autoplay] : [Pagination]}
        className={`${numberOfSlide > 1 ? "multi-item" : ""}`}
      >
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img src={movie.poster_path} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
