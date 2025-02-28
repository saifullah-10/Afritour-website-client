// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCreative } from "swiper/modules";
import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay, EffectCreative, Pagination, Navigation]}
        className="mySwiper rounded-3xl  border-4 "
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/5267250/pexels-photo-5267250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="kruger national park"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/5876664/pexels-photo-5876664.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
