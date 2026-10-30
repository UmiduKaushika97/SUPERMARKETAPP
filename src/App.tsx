
import './App.css'
import CategorySlider from './components/CategorySlider'
import MainCarousel from './components/MainCarousel'
import MainNavBar from './components/MainNavBar'
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
     <h1>home page</h1>
    </>

    
  )
}

export default App
