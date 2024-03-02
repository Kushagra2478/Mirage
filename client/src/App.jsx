import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Navbar/Footer';

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <div className='footer-list'>
          
        <Footer item1={"item1"} item2={"item2"} item3={"item3"} item4={"item4"} />
        <Footer item1={"KD"} item2={"item2"} item3={"item3"} item4={"item4"} />
        <Footer item1={"KD"} item2={"KD"} item3={"item3"} item4={"item4"} />
        
        </div>
        
      </div>
      
    </>
  )
}

export default App
