import data from "../StaticData/feature.json";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import './styles.css';
// import required modules
import { Navigation } from "swiper/modules";

const FeaturedProducts = () => {
  console.log(data);
  return (
    <div className="container featured-products">
      <h2 className="secondary-heading text-center my-4">Featured Products</h2>

      <Swiper
      spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={5}
      >
        <div className="containter">
          {data.products.map((data) => (
           <SwiperSlide key={data.id}>
             <div  className="single-card">
              <img src={data.heart} alt="" />
              <div className="discount">{data.discount}</div>
              <div>
              <img src={data.image} alt="" className="cardimg" />
              </div>

              <div className="card-body">
                <h6>{data.title}</h6>
                <hr />
                <div className="d-flex gap-4">
                  <p className="fw-bold">{data.discountedprice}</p>
                  <p className="text-decoration-line-through">{data.price}</p>
                </div>
              </div>
            </div>
           </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
