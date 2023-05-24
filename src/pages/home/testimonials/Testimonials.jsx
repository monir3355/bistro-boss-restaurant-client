import React, { useEffect, useState } from "react";
import TitleSection from "../../share/TitleSection";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegStar, FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Rating from "react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-16">
      <TitleSection
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></TitleSection>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center p-12 md:w-5/6 mx-auto">
                <div>
                  <Rating
                    placeholderRating={review.rating}
                    readonly
                    emptySymbol={<FaRegStar className="text-yellow-500" />}
                    placeholderSymbol={<FaStar className="text-yellow-500" />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                  />
                </div>
                <div className="space-y-3">
                  <h1 className="text-4xl">"</h1>
                  <p>{review.details}</p>
                  <h4 className="text-xl font-semibold text-yellow-600">
                    {review.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
