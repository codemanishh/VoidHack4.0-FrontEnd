import React, { useState } from 'react'
import AdminLogo from "../Images/swachh_bharat_abhiyan-2.jpg"

import "./Login.css" ;
import {Link , useNavigate} from 'react-router-dom' ;
import axios from 'axios';
import TextField from '@mui/material/TextField';



    
    

    


   
    
    
   



function Loginpage() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
    const Navigate = useNavigate();
  
    const formsubmitfunc = async (e) => {
        Navigate("/viewcomplain")
      e.preventDefault();
  
      const options = {
        method: 'GET',
        url: 'https://codebloodbackend.herokuapp.com/user/login',
        params: { email: email, password: password }
      };
  
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

     
  
    }
  


        
      
       
    

   

  return (
    <div className='Login-page-container'>
         <div className='img-login-form-container'>

         
        <div className='logo-container'>
            <img  className='login-logo' src={AdminLogo} alt= "Logo"/>
            <h5 className='login-msg'>Login for seamless experience</h5>
        </div>
    <div className='form-container'>

        <form className='form-tag' onSubmit={formsubmitfunc}>
        <div className='login-form-input-fields'> 

        
        <TextField 
            value={email}
            className='input-fields' 
            id="standard-basic" 
            label="Email" 
            variant="standard"
            type="email"
            required
            onChange={(e) => setemail(e.target.value)} />

        <TextField
            value={password}
            className='input-fields' 
            id="standard-basic1" 
            label="Password" 
            variant="standard"
            type="password"
            required
            onChange={(e) => setpassword(e.target.value)} />

           <div>
           <input type="submit"  className="input-btn-login-form" ></input>
           </div>
            
           </div>   
        </form>
</div>
<div className='Registration-text'>
       <Link to="/registration" className='dont-have-account'><p>Don't have account/sing-up</p></Link> 
    </div>
    </div>
    
    </div>
  )
}


export default Loginpage ;