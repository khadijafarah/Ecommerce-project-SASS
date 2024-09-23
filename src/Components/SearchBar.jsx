import logo from "../assets/Images/logo.png";
import NavBar from "./NavBar";
import cart from "../assets/svg/cart.svg"
import user from "../assets/svg/user.svg"
import { CiSearch } from "react-icons/ci";
// import { IoMdCart } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="container searchbar-section">
        <div>
         <img src={logo} alt="logo" />
    
        </div>
        <div className="input-section">
          <div>
           <input type="text" placeholder="search" className="input-paceholder" />
           <CiSearch color="white" className="search-icon"/>
          </div>
          <div className="icons">
            <div>
            <img src={cart} alt="" />
            </div>
            <div>
            <img src={user} alt="" />
            </div>
          {/* <IoMdCart color="white"/> */}
          </div>
       
        </div>
        
      </div>
      <NavBar></NavBar>
    </div>
  )
}

export default SearchBar
