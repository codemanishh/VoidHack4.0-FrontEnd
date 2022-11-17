// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import Navbar from './Navbar.js'
// import Profile from 'G:/Client Admin Portal/Admin-portal/my-admin/src/Images/user-profile.png'
// // import Profile from 'G:/Happy life/Happy-life-frontend/happy-lifep/src/images/Profile.png'
// import "./User.css"
// import './Vendorform.css'
// // import Avatar from '@mui/material/Avatar';
// import TextField from '@mui/material/TextField';

// // import ConnectingAirportsTwoTone from '@mui/icons-material/ConnectingAirportsTwoTone';
// // import UserProfileImg from "G:/Happy life/Happy-life-frontend/happy-lifep/src/images/user-profile.png"
// function Vendorform() {
//     // const inputRef = useRef(null);

//     const [Firstname, setFirstname] = useState("");
//     const [Lastname, setLastname] = useState("");
//     const [email, setemail] = useState(" ");
//     const [phone, setphone] = useState("");
//     const [currentAddress, setcurrentAddress] = useState("");
//     const [PermanentAddress, setpermanentAddress] = useState("");
    
//     const [gst , setgst] = useState("");
//     const [Pan , setpan] = useState("");
//     const [BankAccount , setbankaccount] = useState("");

//     // const uploadedImage = React.useRef(null);
//     // const imageUploader = React.useRef(null);

//     const userprofileSubmitFunc = (e) => {
//         e.preventDefault();
//         alert("upadated successfully")
//     }

//     return (
//         <div className='home'>
//             <Sidebar />
//             <div className='home-container'>
//                 <Navbar />
//                 <div className='user-container'>
//                     <div className='user-data-container'>





//                         <h2 className='add-vendor-head'>Add Vendor</h2>


//                         <div className='acount-informatiion'>


//                             <h3 className='Account-info-head'> Name</h3>




//                             <form className='acount-informatiion' onSubmit={userprofileSubmitFunc}>


//                                 <TextField
//                                     value={Firstname}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Firstname"
//                                     variant="standard"
//                                     type="text"
//                                     required
//                                     onChange={(e) => setFirstname(e.target.value)} />

//                                 <br />

//                                 <TextField
//                                     value={Lastname}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Lastname"
//                                     variant="standard"
//                                     type="text"
//                                     required
//                                     onChange={(e) => setLastname(e.target.value)} />

//                                 <br />

//                                 <h3 className='Account-info-head'>Email</h3>

//                                 <TextField
//                                     value={email}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Email"
//                                     variant="standard"
//                                     type="email"
//                                     required
//                                     onChange={(e) => setemail(e.target.value)} />






//                                 <h3 className='Account-info-head'>Address</h3>

//                                 <TextField
//                                     value={PermanentAddress}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Permanent Address"
//                                     variant="standard"
//                                     type="text"
//                                     required
//                                     onChange={(e) => setpermanentAddress(e.target.value)} />
//                                 <br />

//                                 <TextField
//                                     value={currentAddress}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Current Address"
//                                     variant="standard"
//                                     type="text"
//                                     required
//                                     onChange={(e) => setcurrentAddress(e.target.value)} />


//                                 <h3>Phone no.</h3>

//                                 <TextField
//                                     value={phone}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Phone no."
//                                     variant="standard"
//                                     type="number"
//                                     // height="20px"
//                                     // width="50px"
//                                     required
//                                     onChange={(e) => setphone(e.target.value)} />

//                                 <br />


//                                 <h3>GST no.</h3>

//                                 <TextField
//                                     value={gst}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Enter your gst number"
//                                     variant="standard"
//                                     type="number"
//                                     // height="20px"
//                                     // width="50px"
//                                     required
//                                     onChange={(e) => setgst(e.target.value)} />
//                                 <br />

//                                 <h3>PAN no.</h3>

//                                 <TextField
//                                     value={Pan}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Enter your pan number"
//                                     variant="standard"
//                                     type="number"
//                                     // height="20px"
//                                     // width="50px"
//                                     required
//                                     onChange={(e) => setpan(e.target.value)} />
//                                 <br />

//                                 <h3>Bank Account no.</h3>

//                                 <TextField
//                                     value={BankAccount}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Enter your account number"
//                                     variant="standard"
//                                     type="number"
//                                     // height="20px"
//                                     // width="50px"
//                                     required
//                                     onChange={(e) => setbankaccount(e.target.value)} />








//                                 <input type="submit" className="submit-btn-user"></input>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Vendorform;