import toy from "../assets/Images/toy.png";
import tv from "../assets/Images/tv.png";
import cosmetics from "../assets/Images/cosmetics.png";
import dinning from "../assets/Images/dinning.png";
import fruits from "../assets/Images/fruits.png";
import head from "../assets/Images/head.png"
import block from "../assets/Images/block.png"
import gymsuit from "../assets/Images/gymsuit.png"
import coat from "../assets/Images/coat.png"
import shoe from "../assets/Images/shoe.png"


const ProductGallery = () => {
  return (
    <div >
      <h2 className="secondary-heading text-center">Our Product Gallery</h2>
      <div className="product-gallery">
        <div className="gallery-left">
          <div className="gallery-top">
            <img
              src={toy}
              alt=""
              style={{ width: "292.62px", height: "407.96px" }}
            />
            <img src={tv} alt="" style={{width:"481.64px", height:"333.2px",marginTop:"74.77px"}}/>
          </div>
          <div className="gallery-bottom">
            <img src={cosmetics} alt="" />
            <img src={fruits} alt="" style={{marginBottom:"86.5px"}} />
          </div>
         
        </div>
        <div className="gallery-mid">
          <img src={dinning} alt="" style={{marginTop:"184.76px"}}/>
        </div>
        <div className="gallery-right">
            <div className="gallery-top">
                <img src={head} alt="" style={{width:"309.71px",height:"371.65px",marginTop:"90.78px"}} />
                <img src={block} alt="" />
            </div>
            <div className="gallery-bottom">
                <img src={gymsuit} alt="" style={{marginBottom:"28px"}}/>
                <img src={coat} alt="" style={{marginBottom:"78px"}}/>
                <img src={shoe} alt="" />
            </div> 

        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
