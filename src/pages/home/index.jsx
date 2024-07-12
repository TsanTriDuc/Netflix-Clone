import Carousel from "../../components/carousel";

function HomePage() {
  return (
    <div>
      <Carousel numberOfSlide={1} category={"Comedy"} autoplay />
      <Carousel numberOfSlide={6} category={"Trending"} />
    </div>
  );
}

export default HomePage;
