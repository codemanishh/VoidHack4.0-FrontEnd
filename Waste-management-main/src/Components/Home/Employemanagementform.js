// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import Navbar from './Navbar.js'
// import Profile from 'G:/Client Admin Portal/Admin-portal/my-admin/src/Images/user-profile.png'
// import "./User.css"

// import TextField from '@mui/material/TextField';

// // import ConnectingAirportsTwoTone from '@mui/icons-material/ConnectingAirportsTwoTone';
// // import UserProfileImg from "G:/Happy life/Happy-life-frontend/happy-lifep/src/images/user-profile.png"
// function Employemanagementform() {
//     // const inputRef = useRef(null);

//     const [Firstname, setFirstname] = useState("");
//     const [Lastname, setLastname] = useState("");
//     const [email, setemail] = useState(" ");
//     const [Adharno, setAdhar] = useState("");
//     const [currentAddress, setcurrentAddress] = useState("");
//     const [PermanentAddress, setpermanentAddress] = useState("");
//     const [Dob, setDob] = useState("");
//     const uploadedImage = React.useRef(null);
//     const imageUploader = React.useRef(null);

//     const userprofileSubmitFunc = (e) => {
//         e.preventDefault();
//         alert("upadated successfully")
//     }

//     const handleImageUpload = e => {

//         e.preventDefault()
//         const [file] = e.target.files;
//         if (file) {
//             const reader = new FileReader();
//             const { current } = uploadedImage;
//             current.file = file;
//             reader.onload = e => {
//                 current.src = e.target.result;
//                 console.log(current.src);

//             };
//             reader.readAsDataURL(file);

//         }
//     };
//     return (
//         <div className='home'>
//             <Sidebar />
//             <div className='home-container'>
//                 <Navbar />
//                 <div className='user-container'>
//                     <div className='user-data-container'>





//                         <h3 className='edit-profile-head'>Add Employee</h3>
//                         <div
//                             style={{
//                                 // display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center",
//                                 justifyContent: "center"
//                             }}
//                         >
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleImageUpload}
//                                 ref={imageUploader}
//                                 style={{
//                                     display: "none"
//                                 }}
//                             />
//                             <div
//                                 style={{
//                                     height: "90px",
//                                     width: "90px",
//                                     border: "1px solid black",
//                                     borderRadius: "50%"
//                                 }}
//                                 onClick={() => imageUploader.current.click()}
//                             >
//                                 <img
//                                     ref={uploadedImage}
//                                     src={Profile}
//                                     style={{
//                                         width: "90px",
//                                         height: "90px",
//                                         position: "",
//                                         borderRadius: "50%",


//                                     }}
//                                     alt="Profile"
//                                 />
//                             </div>

//                         </div>

//                         <div className='acount-informatiion'>


//                             <h3 className='Account-info-head'> Account Information</h3>




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
                                 
//                                  <br/>


//                                 <TextField
//                                     value={Lastname}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Lastname"
//                                     variant="standard"
//                                     type="text"
//                                     required
//                                     onChange={(e) => setLastname(e.target.value)} />

// <br/>

//                                 <TextField
//                                     value={email}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Email"
//                                     variant="standard"
//                                     type="email"
//                                     required
//                                     onChange={(e) => setemail(e.target.value)} />

// <br/>




//                                 <h3 className='Account-info-head'>Employee Address</h3>

//                                 <TextField
//                                     value={PermanentAddress}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Permanent Address"
//                                     variant="standard"
//                                     type="text"
//                                     required
//                                     onChange={(e) => setpermanentAddress(e.target.value)} />

// <br/>
//                                 <TextField
//                                     value={currentAddress}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Current Address"
//                                     variant="standard"
//                                     type="text"
//                                     required
//                                     onChange={(e) => setcurrentAddress(e.target.value)} />

// <br/>
//                                 <h3>Employee personal ID.</h3>

//                                 <TextField
//                                     value={Adharno}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label="Adhar Number"
//                                     variant="standard"
//                                     type="number"
//                                     // height="20px"
//                                     // width="50px"
//                                     required
//                                     onChange={(e) => setAdhar(e.target.value)} />
// <br/>

//                                 <h3>Date of birth</h3>

//                                 <TextField
//                                     value={Dob}
//                                     className='input-fields-user-profile'
//                                     id="standard-basic"
//                                     label=""
//                                     variant="standard"
//                                     type="date"
//                                     // height="20px"
//                                     // width="50px"
//                                     required
//                                     onChange={(e) => setDob(e.target.value)} />



// <br/>


//                                 <input type="submit" className="submit-btn-user"></input>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Employemanagementform;