import React, { useState } from 'react'
import Navbar from './Navbar'

import Sidebar from './Sidebar'
import "./Home.css";



function Home() {

 
  return (
    <div className='home'>
    <Sidebar/>
    <div className='home-container'>
    <Navbar/>
    <h1  className='wellcome-heading'>Wellcome to my admin panel</h1>
    </div>
    
    
    
    
    </div>
  )
}

export default Home