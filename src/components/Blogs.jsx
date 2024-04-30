import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "./blogs.css";
import { Pagination } from "swiper/modules";
import BlogsCard from "./BlogsCard";
export default function Blogs() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        {" "}
        <BlogsCard image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHwwfDB8fHww" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <BlogsCard image="https://plus.unsplash.com/premium_photo-1679865372673-8d1655a73b50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91cmlzbXxlbnwwfDB8MHx8fDA%3D" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <BlogsCard image="https://images.unsplash.com/photo-1659888254445-e457493c19fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzZXJ2YSUyMG5hdHVyYWx8ZW58MHwwfDB8fHww" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <BlogsCard image="https://images.unsplash.com/photo-1619120238346-978e07731e77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG91cmlzbXxlbnwwfDB8MHx8fDA%3D" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <BlogsCard image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHwwfDB8fHww" />{" "}
      </SwiperSlide>
    </Swiper>
  );
}
