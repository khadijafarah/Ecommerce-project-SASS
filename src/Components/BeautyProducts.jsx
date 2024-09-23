// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';
import skin from "../assets/Images/skin.png";
import lipstick from "../assets/Images/lipstick.png";
import broccoli from "../assets/Images/broccoli.png";
import { Swiper, SwiperSlide } from 'swiper/react';

const BeautyProducts = () => {
  return (
    <div className="beauty-products">
      <div className="container beauty-container">
        <div>
          <p className="beauty-heading">
            50+ Beautiful & Modern <br /> Category Product
          </p>
          <p>
            Our designer already made a lot of beautiful <br />
            prototipe of rooms that inspire you
          </p>
          <button className="beauty-btn">Explore More</button>
        </div>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div className='beauty-images'>
          <SwiperSlide className='d-flex justify-content-center w-100'>   
          <img src={skin} alt="" />
          </SwiperSlide>
          <SwiperSlide className='d-flex justify-content-center w-100'>  
          <img src={lipstick} alt="" />
          </SwiperSlide>
          <SwiperSlide className='d-flex justify-content-center w-100'> <img src={broccoli} alt="" /></SwiperSlide>
  
          </div>
        </Swiper>

      
      </div>
    </div>
  );
};

export default BeautyProducts;
