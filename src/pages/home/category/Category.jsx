import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import TitleSection from "../../share/TitleSection";

const Category = () => {
  return (
    <section className="my-16">
      <TitleSection
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></TitleSection>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[450px]"
      >
        <SwiperSlide>
          <img className="w-full h-full" src={slide1} alt="" />
          <h4 className="text-4xl uppercase -mt-20 text-center text-white font-semibold">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src={slide2} alt="" />
          <h4 className="text-4xl uppercase -mt-20 text-center text-white font-semibold">
            Pasta
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src={slide3} alt="" />
          <h4 className="text-4xl uppercase -mt-20 text-center text-white font-semibold">
            Soup
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src={slide4} alt="" />
          <h4 className="text-4xl uppercase -mt-20 text-center text-white font-semibold">
            Breads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src={slide5} alt="" />
          <h4 className="text-4xl uppercase -mt-20 text-center text-white font-semibold">
            salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
