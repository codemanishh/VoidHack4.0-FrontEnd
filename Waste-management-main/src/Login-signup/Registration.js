import React, { useState } from 'react'
import "./Registration.css";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom' ;
import TextField from '@mui/material/TextField';
import AdminLogo from "../Images/swachh_bharat_abhiyan-2.jpg"



function Registration() {
  const Navigate = useNavigate();

 
   


    const [fname , setfname] = useState("");
    // const [lname , setlname] = useState("");
    const [email , setemail] = useState("");
    const [contact , setcontact] = useState("");
    const [password, setpassword] = useState("");
    // const [address, setaddress] = useState("");
    
    const [ward_id, setward_id] = useState("");
    const [zone_id, setzone_id] = useState("");
    const [house_number, sethouse_number] = useState("");
    
    // const EMAIL_REGEX = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
  
    

    
      
    
    
  const SubmitFunc = async (e) => {
    const options = {
      method: 'POST',
      url: 'https://codebloodbackend.herokuapp.com/user/signup',
      data: {
        email: email,
        name: "divya",
        contact_number: String(contact),
        password: password,
        ward_id: String(ward_id),
        house_number: String(house_number),
        // zone_id: String(zone_id)
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  }


     

    

    

    return (
       
    
         
       
        <div className='registration-page-container'>
       
          <div className='registration-logo-form-container'>
          
            <div className='logo-container'>
            
                <img className='Reg-logo' src={AdminLogo} alt="Logo" />

            </div>
            <h4 className='register-yourself-msg'>Register yourself </h4>
            <div className='Registration-page-form-container'>
            <form onSubmit={SubmitFunc} className="reg-form">

            
            <div className='input-field-container'>
            <TextField 
            value={fname}
            className='input-fields' 
            id="standard-basic" 
            label="Name" 
            variant="standard"
            type="text"
            required
            onChange={(e) => setfname(e.target.value)} />
            
            <TextField 
            value={email}
            className='input-fields' 
            id="standard-basic" 
            label="Email" 
            variant="standard"
            type="email"
            required
            onChange={(e) => setemail(e.target.value)} />
            </div>
              <div className='input-field-container'>
              <TextField 
              value={contact}
              className='input-fields' 
              id="standard-basic" 
              label="Contact no." 
              variant="standard"
              type="tel"
              required
              onChange={(e) => setcontact(e.target.value)} 

              />



              <TextField 
              value={ward_id}
              className='input-fields' 
              id="standard-basic" 
              label="ward id" 
              type="text"
              variant="standard" 
              required
              onChange={(e) => setward_id(e.target.value)}
              />
              </div>
              <div className='input-field-container'>
              <TextField 
              type= "text"
              value={house_number}
              className='input-fields' 
              id="standard-basic" 
              label="House no." 
              variant="standard" 
              onChange={(e) => sethouse_number(e.target.value)}
              required
              />
              
             
              <TextField 
              value={password}
              className='input-fields' 
              id="standard-basic" 
              label="password" 
              variant="standard" 
              onChange={(e) => setpassword(e.target.value)}
              required
              />
             
              
              </div>

             
              <div className='input-fields-btn'>
              <input type="submit" className='input-btn-reg-form'></input>
              </div>
              
              </form>
              <div className='already-reg-msg'>
                <p className='already-reg-msg-para'>Already register ? go to <Link className='link' to="/">Login</Link></p>
              </div>
                
            </div>
            </div>
            
        </div>
    
    )

}

export default Registration