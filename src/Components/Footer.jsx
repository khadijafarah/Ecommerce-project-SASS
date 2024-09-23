
import techlogo from "../assets/Images/techlogo.png"
import facebook from "../assets/Images/facebook.png"
import twitter from "../assets/Images/twitter.png"
import youtube from "../assets/Images/youtube.png"
import FooterBottom from "./FooterBottom"
const Footer = () => {
  return (
    <div className="footer-section">
        <div className="container footer-content">
           <div>
              <img src={techlogo} alt="" />
              <p className="footer-text">techserve4u@gmail.com</p>
              <p className="footer-text">+123-589-9763</p>
              <p className="footer-text">King Street, Melbourne, <br />
              Australia</p>

           </div>
           <div>
            <p className="footer-heading">Categories</p>
            <p className="footer-text">About Us</p>
            <p className="footer-text">Contact Us</p>
            <p className="footer-text">Resources</p>

           </div>
           <div>
            <p className="footer-heading">My Account</p>
            <p className="footer-text">Support</p>
            <p className="footer-text">Your Quotes</p>
            <p className="footer-text">Track your Order</p>
           </div>

           <div>
            <p className="footer-heading">Follow Us</p>
            <p className="footer-text">It is a long established fact that <br />a reader will be distracted by <br />the readable <br />
            looking at its layout.</p>
            <div className="footer-icons">
               <img src={facebook} alt="" />
               <img src={twitter} alt="" />
               <img src={youtube} alt="" />
            </div>
           </div>
        </div>
        <FooterBottom></FooterBottom>
    </div>
  )
}

export default Footer