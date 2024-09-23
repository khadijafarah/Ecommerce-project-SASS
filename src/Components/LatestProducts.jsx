import hearticon from "../assets/Images/heart.png";
import purplephone from "../assets/Images/purplephone.png";
const LatestProducts = () => {
  return (
    <div className="latest-section">
      <div className="container">
        <div className="latest-heading">
          <div>
            <p className="secondary-heading">Latest Products</p>
          </div>
          <div>
            <button className="view-morebtn">View More</button>
          </div>
        </div>
        <div>
          <div className="top-content">
            <div className="hawaiin-container">
              <div>
                <img src={hearticon} alt="" className="latest-heart" />
                <p className="hawaiin-heading">
                  Hawaiian <br /> Shirts
                </p>
                <p className="latest-text">Dress up in summer vibe</p>
                <p className="latest-sale">UPTO 50% OFF</p>
                <p className="latest-key">&#8595;</p>
                <button className="latest-btn">Shop Now</button>
              </div>
            </div>
            <div className="blackhoodie-container">
              <div>
                <img src={hearticon} alt="" className="latest-heart" />
                <p className="hoodie-heading">
                  Raven Hoodie <br /> Design
                </p>
                <p className="hoodie-text">New Design Every Week</p>
                <p className="hoodie-sale">UPTO 50% OFF</p>
                <p className="hoodie-key">&#8595;</p>
                <button className="hoodie-btn">Shop Now</button>
              </div>
            </div>
            <div className="joggers-container">
              <div>
                <img src={hearticon} alt="" className="latest-heart" />
                <p className="joggers-heading">
                  Raven Hoodie <br /> Design
                </p>
                <p className="joggers-text">New Design Every Week</p>
                <p className="joggers-sale">UPTO 50% OFF</p>
                <p className="joggers-key">&#8595;</p>
                <button className="joggers-btn">Shop Now</button>
              </div>
            </div>
          </div>

          <div className="bottom-content">
            <div className="urbanshirt-container">
              <div>
                <img src={hearticon} alt="" className="urban-heart" />
                <p className="urban-heading">
                  Raven Hoodie <br /> Design
                </p>
                <p className="urban-text">New Design Every Week</p>
                <p className="urban-sale">UPTO 50% OFF</p>
                <p className="urban-key">&#8595;</p>
                <button className="urban-btn">Shop Now</button>
              </div>
            </div>
            <div className="phone-container">
              <div className="phone-section">
                <img src={purplephone} alt="" className="purplephone" />
                <div>
                <img src={hearticon} alt="" className="phone-heart" />
                <p className="phone-heading">
                  Modern Mobile <br /> Phone
                </p>
                <p className="phone-text">Street Style Icon</p>
                <p className="phone-sale">UPTO 60% OFF</p>
                <p className="phone-key">&#8595;</p>
                <button className="phone-btn">Shop Now</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
