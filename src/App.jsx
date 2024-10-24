import './App.css'
/* import Particles from "react-tsparticles"
import { loadFull } from 'tsparticles' */
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Hmoe/Home'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import NavBar from './Component/NavBar/NavBar'
function App() {
 
  /* const handleInit = async (main)=>{
    await loadFull(main)
  } */
  return (
   <div className='App'>
    {/* particles */}

  {/*   <Particles  id="particles" init={handleInit}/> */}

    {/* navbar */}
    <NavBar />
    {/* page content */}
    <div className='App__main-page-contenet'>
    <Routes>
      <Route index path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/> 
      <Route path='/skills' element={<Skills />}/> 
      <Route path='/portfolio' element={<Portfolio />}/> 
      <Route path='/contact' element={<Contact />}/> 
    </Routes>
    </div>
  
   </div>
  )
}

export default App


