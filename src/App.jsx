import banner from './assets/bannerDC.webp'
import Footer from './components/Footer'
import Galery from './components/Galery'
import Navbar from './components/Navbar'
import Video from './components/Video'


function App() {


  return (
    <>
      <Navbar/>
      <img className='w-full' src={banner}></img>
      <Galery/>
      <Video/>
      <Footer/>
    </>
  )
}

export default App
