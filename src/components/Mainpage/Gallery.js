import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import Photo from '../../images/DSC_0770.jpg'
export default function Gallery() {
  return (
    <section className="section section-sm section-top-0 section-fluid section-relative bg-gray-4 gallery-section" style={{'background':'var(--gray)'}}>
      <div className="container-fluid">
        <h6 className="gallery-title">Gallery</h6>
        <div className="pictute-gallery">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper gallery"
            data-aos="fade-up"
          >
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={Photo} alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}