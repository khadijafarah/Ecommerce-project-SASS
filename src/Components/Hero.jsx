import heroimage from "../assets/Images/heroimage.png"
import vector from "../assets/svg/vector.svg"
import smallvector from "../assets/svg/smallvector.svg"
import bigsale from "../assets/svg/bigsale.svg"
import bigvector from "../assets/Images/bigvector.png"
const Hero = () => {
  return (
    <div className="hero">
      <div className="container top-banner">
        <div className="left-content">
         <div className="new-arrival">
          <img src={vector} alt="" />
          <h4>New Arrival</h4>
          <img src={vector} alt="" />
         </div>
          <h1 className="primary-heading">
            Shop with Confidence: <br />
            Trusted Source for Quality <br />
            Products
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
            <br /> tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="shop-btn">Shop Now</button>
          <div className="rating">
            <div className="rating-items">
              <h3>200+</h3>
              <p>International Brands</p>
            </div>

            <div className="rating-items">
              <h3>2,000+</h3>
              <p>High-Quality Products</p>
            </div>
            <div>
              <h3>30,000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="heroimage-container">
          <div>
          <img src={smallvector} alt=""className="small-vector" />
          </div>
         <div>
         <img src={heroimage} alt="" className="hero-image" />
         </div>
         <div>
         <img src={bigsale} alt="" className="big-sale"/>
         </div>
        <div>
        <img src={bigvector} alt="" className="big-vector"/>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
