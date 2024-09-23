
import { Swiper, SwiperSlide } from 'swiper/react';import blackshirt from "../assets/Images/blackshirt.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import starticon from "../assets/Images/staricon.png"
import heart from "../assets/Images/heart.png"
import redac from "../assets/Images/redac.png"
import pant from "../assets/Images/pant.png"
import remote from "../assets/Images/remote.png"
import whiteac from "../assets/Images/whiteac.png"

const Featured = () => {
  return (
    <div className="container featured-products">
      <h2 className="secondary-heading">Featured Products</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       <div className="card-container">
       <SwiperSlide>
       <div className="feature-container">
         <img src={heart} alt="" className="heart-icon"/>
         <img src={blackshirt} alt="" className="blackshirt" />
         <p className="feature-title">T-shirt with Tape Details</p>
         
         <div className="card-text">
          <div className="price-content">
            <p className="sale-price">$225.00</p>
            <p className="original-price">$300</p>
          </div>
          <div>
            <img src={starticon} alt="" className="star-icon" />
          </div>
         </div>
        </div>
        <div className="feature-container">
         <img src={heart} alt="" className="redac-heart"/>
         <img src={redac} alt="" className="blackshirt" />
         <p className="redac-title">Latest Mini-split systems</p>
        
         
         <div className="card-text">
          <div className="price-content">
            <p className="sale-price">$225.00</p>
            <p className="original-price">$300</p>
          </div>
          <div>
            <img src={starticon} alt="" className="star-icon" />
          </div>
         </div>
        </div>
      
        <div className="feature-container">
         <img src={heart} alt="" className="heart-icon"/>
         <img src={pant} alt="" className="blackshirt" />
         <p className="feature-title">Latest Denim pant</p>
         
         <div className="card-text">
          <div className="price-content">
            <p className="sale-price">$225.00</p>
            <p className="original-price">$300</p>
          </div>
          <div>
            <img src={starticon} alt="" className="star-icon" />
          </div>
         </div>
        </div>
        <div className="feature-container">
         <img src={heart} alt="" className="heart-icon"/>
         <img src={remote} alt="" className="blackshirt" />
         <p className="feature-title">12FT PVC Decorative Line</p>
         
         <div className="card-text">
          <div className="price-content">
            <p className="sale-price">$225.00</p>
            <p className="original-price">$300</p>
          </div>
          <div>
            <img src={starticon} alt="" className="star-icon" />
          </div>
         </div>
        </div>
        <div className="feature-container">
         <img src={heart} alt="" className="whiteac-heart"/>
         <img src={whiteac} alt="" className="blackshirt" />
         <p className="feature-title">T-shirt with Tape Details</p>
         
         <div className="card-text">
          <div className="price-content">
            <p className="sale-price">$225.00</p>
            <p className="original-price">$300</p>
          </div>
          <div>
            <img src={starticon} alt="" className="star-icon" />
          </div>
         </div>
        </div>
       </SwiperSlide>
       
        
       </div>
        
      </Swiper>
     
    
    </div>
  );
};

export default Featured;
