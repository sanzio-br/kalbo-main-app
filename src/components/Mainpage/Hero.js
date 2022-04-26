
import image1 from '../../images/Kalbo Adventures Karuru Experience 2021-31.jpg'
import image2 from '../../images/Kalbo Adventures Karuru Experience 2021-193.jpg'
import image3 from '../../images/Kalbo Adventures Karuru Experience 2021-256.jpg'

// You can also use <link> for styles
// ..

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../css/swiper.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className='swiper-container section hero'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src={image1} alt="" />
          <div className='cover-text col-md-10'>
            <h6 className="text-uppercase h6" data-aos="fade-left">
            Enjoy the Best Destinations with us
            </h6>
            <h2 class="oh font-weight-light h2" data-aos="fade-up">
              <span>Explore</span>  <span className="font-weight-bold">
              The World
              </span>
            </h2>
            <Link to='Contacts'>
            <a className="button button-default-outline button-ujarak"   href="/contacts"
              data-aos="fade-up" >
              Get in touch
            </a>
            </Link>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <div className='cover-text col-md-10'>
            <h6 className="text-uppercase h6" data-aos="fade-left">
            Build your Next Holiday Trip with Us
            </h6>
            <h2 class="oh font-weight-light h2" data-aos="fade-up">
              <span>Create</span>  <span className="font-weight-bold">
              Your Tour
              </span>
            </h2>
            <Link to='Contacts'>
            <a className="button button-default-outline button-ujarak"   href="/contacts"
              data-aos="fade-up" >
              Get in touch
            </a>
            </Link>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <div className='cover-text col-md-10'>
            <h6 className="text-uppercase h6" data-aos="fade-left">
            A team of professional Travel Experts
            </h6>
            <h2 class="oh font-weight-light h2" data-aos="fade-up">
              <span>Trust</span>  <span className="font-weight-bold">
              Our Experience
              </span>
            </h2>
            <Link to='Contacts'>
            <a className="button button-default-outline button-ujarak"   href="/contacts"
              data-aos="fade-up" >
              Get in touch
            </a>
            </Link>
          </div>
          </SwiperSlide>
      </Swiper>
    </section>
  );
}
