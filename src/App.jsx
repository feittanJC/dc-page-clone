import banner from './assets/bannerDC.webp'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <img className='w-full' src={banner}></img>
    </>
  )
}

export default App
