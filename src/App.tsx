
import './App.css'
import CategorySlider from './components/CategorySlider'
import MainCarousel from './components/MainCarousel'
import MainNavBar from './components/MainNavBar'
import MostPopularCategories from './components/MostPopularCategories'
import PromoBanners from './components/PromoBanner'
import WeeklyOffers from './components/WeeklyOffers'
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
     <WeeklyOffers/>
     
    </>

    
  )
}

export default App
