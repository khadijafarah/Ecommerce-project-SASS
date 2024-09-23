import hamburger from "../assets/svg/hamburger.svg"

const NavBar = () => {
  return (
    <div className="searchbar">
      <div className="container navbar">
      <div>
        <img src={hamburger} alt="" className="hamburger" />
        <button className="nav-btn">Category</button>
      </div>
      <div >
        <ul className="nav-items">
          <li>campaigns</li>
          <li>Brands</li>
          <li>Categories</li>
          <li>Help</li>
          <li>FAQ</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default NavBar
