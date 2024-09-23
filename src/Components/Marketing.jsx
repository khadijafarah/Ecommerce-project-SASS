import shipping from "../assets/Images/shipping.png"
import money from "../assets/Images/money.png"
import secure from "../assets/Images/secure.png"
const Marketing = () => {
  return (
    <div className="container marketing">
        <div className="free-shipping">
            <div>
              <img src={shipping} alt="" />
            </div>
            <div>
            <p className="marketing-title">Free Shipping</p>
            <p className="marketing-text">From $99.00</p>
            </div>
        </div>
        <div className="money-guarantee">
           <div>
            <img src={money} alt="" />
           </div>
           <div>
            <p className="marketing-title">Money Guaratee</p>
            <p className="marketing-text">30 Days Back</p>
           </div>
        </div>
        <div className="secure-shopping" >
          <div>
            <img src={secure} alt="" />
          </div>
          <div>
            <p className="marketing-title">100% Safe</p>
            <p className="marketing-text">Secure Shopping</p>

          </div>
           
           
        </div>
      
    </div>
  )
}

export default Marketing
