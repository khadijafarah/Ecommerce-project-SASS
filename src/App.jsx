{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import BeautyProducts from "./Components/BeautyProducts"
import Cosmetics from "./Components/Cosmetics"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import LatestProducts from "./Components/LatestProducts"
import Marketing from "./Components/Marketing"
import ProductGallery from "./Components/ProductGallery"
import SearchBar from "./Components/SearchBar"
import SuperTrendy from "./Components/SuperTrendy"
import FeaturedProducts from './Components/FeaturedProducts';





function App() {
 

  return (
    <>
      <SearchBar></SearchBar>
      <Hero></Hero>
      <Marketing></Marketing>
      <FeaturedProducts></FeaturedProducts>
      <LatestProducts></LatestProducts>
      <SuperTrendy></SuperTrendy>
      <Cosmetics></Cosmetics>
      <BeautyProducts></BeautyProducts>
      <ProductGallery></ProductGallery>
      <Footer></Footer>

    </>
  )
}

export default App
