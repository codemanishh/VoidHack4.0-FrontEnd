
import './App.css';

import React from 'react';
import Loginpage from './Login-signup/Loginpage';
import Registration from './Login-signup/Registration';

import Employee from './Components/Home/Viewcomplain';
import Home from './Components/Home/Home.js';

import Employemanagement from './Components/Home/Employemanagementform'
import Viewcomplain from './Components/Home/Viewcomplain'
import Postcomplain from './Components/Home/Postcomplain';
import Sidebar from './Components/Home/Sidebar';
import Adminmanagementform from './Components/Home/AdminmanagementForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendor from './Components/Home/Vendor';
import Vendorform from './Components/Home/Vendorform';
import Scan from './Components/Home/Scan';

import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
      <Routes>
         
        <Route path='/' element = {<Loginpage/>}/>
        <Route path='/viewcomplain' element = {<Viewcomplain/>}/>
        <Route path='/Postcomplain' element = {<Postcomplain/>}/>
        <Route path='/scan' element = {<Scan/>}/>
    
        {/* <Route path='/config' element = {<Config/>}/> */}
        <Route path='/home' element ={<Home/>} />
        <Route path='/registration' element = {<Registration/>} />
        <Route path='/employee' element={<Employee/>}/>
        {/* <Route path='/user' element={<User/>}/> */}
        {/* <Route path='/adminmangementform' element={<Adminmanagementform/>}/>  */}
        {/* <Route path='/employeemanagementform' element={<Employemanagement/>}/> */}
        {/* <Route path='/vendor' element={<Vendor/>}/> */}
        {/* <Route path='/vendorform' element={<Vendorform/>}/> */}
        
       
      </Routes>
     </BrowserRouter>
    
     
    </div>
  );
}

export default App;

