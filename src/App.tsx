
import './App.css'
import CategorySlider from './components/CategorySlider'
import MainCarousel from './components/MainCarousel'
import MainNavBar from './components/MainNavBar'
import MostPopularCategories from './components/MostPopularCategories'
import PromoBanners from './components/PromoBanner'
import ServicePage from './pages/ServicePage'

function App() {
 

  return (
    <>
     <MainNavBar/>
     <MainCarousel/>
     <ServicePage/>
     <CategorySlider/>
     <PromoBanners/>
     <MostPopularCategories/>
     <h1>home page</h1>
     <p>cart</p>
     <p> cart delete </p>
     <h1>card payout option</h1>
     <p>card details</p>
     <h2>card details create</h2>
    </>

    
  )
}

export default App
