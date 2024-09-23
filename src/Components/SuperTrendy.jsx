import data from "../StaticData/trendy.json";

const SuperTrendy = () => {
  return (
    <div className="container super-section">
      <h2 className="secondary-heading text-center my-4">Super Trendy Product</h2>

      <div className="trendy-card container">
        {data.product.map((data) => (
          <div key={data.id}className="trendy-list">
            <img className="trendy-img"src={data.image} alt={data.title} />
          <div className="trendy-body">
    
            <p className="title">{data.title}</p>
            <p className="desc">{data.description}</p>
            <div className="price-list">
              <p className="discountedprice">{data.discountedprice}</p>
              <p className="pricebefore">{data.pricebefore}</p>
            </div>
            
          </div>
          <div className="off">
             25%off
          </div>
        </div>

       
        ))}
      </div>

      <div className="viewbtn">
        <button className="viewmore">View More</button>
      </div>
      
    </div>
  );
};

export default SuperTrendy;
