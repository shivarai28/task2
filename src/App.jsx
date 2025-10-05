import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Image from './components/image'
import VideoSlider from './components/VideoSlider'
import jo from "../src/assets/download.jpeg"
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
const text = [1,2,3,4,56,6]  

return(
  <>
 
    <Navbar />

  <Routes>

    <Route path={"/"} element={<Home/>} />
    <Route path={"/about"} element={<About/>} />
    <Route path={"/contact"} element={<Contact/>} />
    </Routes>

    <Footer/>

  </>
)
}


export default App
