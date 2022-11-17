// import React from 'react'
// import "./Employee.css"
// import Sidebar from './Sidebar'
// import Navbar from './Navbar'
// import './Vendor.css'
// import { useNavigate } from 'react-router-dom'

// function Vendor() {
//     const Navigate = useNavigate();
//     const AddEmpFunc = () => {
//         Navigate('/vendorform')
//     }
//     const VendorData = [
//         {
//             Shopname: "Super Kirana",
//             vname: "Rohit Mahajan",
//             mobileno: 8599978567,
//             email: "Rohit@gmail.com"
//         },
//         {
//             Shopname: "Prashant Genral Store",
//             vname: "Prashant Khanchnadani",
//             mobileno: 7899978567,
//             email: "Prashant@gmail.com"
//         },
//         {
//             Shopname: "Sharma Stores",
//             vname: "Ravi sharma",
//             mobileno: 9199978567,
//             email: "Ravi@gmail.com"
//         },
//         {
//             Shopname: "Jain Store",
//             vname: "Tarun jain",
//             mobileno: 9097878567,
//             email: "Tarun@gmail.com"
//         },
//         {
//             Shopname: "Sen stores",
//             vname: "Garvit sen",
//             mobileno: 6099978567,
//             email: "Garvit@gmail.com"
//         },
//         {
//             Shopname: "Rathod general store",
//             vname: "Jairaj Rathod",
//             mobileno: 8099978567,
//             email: "Jairaj@gmail.com"
//         },
//         {
//             Shopname: "Patil Stores",
//             vname: "Santosh Patil",
//             mobileno: 9099978567,
//             email: "Santosh@gmail.com"
//         },
//         {
//             Shopname: "Raj Enterprise",
//             vname: "Raj Malhotra",
//             mobileno: 7099978567,
//             email: "Raj@gmail.com"
//         },
//         {
//             Shopname: "Jaiswal Business",
//             vname: "Kashish Jaiswal",
//             mobileno: 6099978567,
//             email: "Kashish@gmail.com"
//         },
//         {
//             Shopname: "Patel General store",
//             vname: "Shruti Patel",
//             mobileno: 7099978567,
//             email: "Shruti@gmail.com"
//         },
//         {
//             Shopname: "Joshi shop",
//             vname: "Hemendra Joshi",
//             mobileno: 8088785670,
//             email: "Hemendra@gmail.com"
//         },
//         {
//             Shopname: "Giri kirana",
//             vname: "Arvind Giri",
//             mobileno: 9099785670,
//             email: "Arvind@gmail.com"
//         },

//         {
//             Shopname: "Shree general store",
//             vname: "Shree Sharma",
//             mobileno: 8078785670,
//             email: "Shree@gmail.com"
//         },


//     ]



//     return (
//         <div className='home'>
//             <Sidebar />
//             <div className='home-container'>
//                 <Navbar />


//                 <div className='service-container-data'>




//                     <div className='service-card'>
//                         <h2>Vendor</h2>
//                         {
//                             VendorData.map((val) =>

//                                 <>
                                    
//                                     <p className='Employee-detail'>{val.Shopname}</p>
                                    
                                    

//                                 </>




//                             )}

//                     </div>


//                     <div className='service-card'>
//                         <h2>Owner Name</h2>
//                         {
//                             VendorData.map((val) =>

//                                 <>

//                                     <p className='Employee-detail'>{val.vname}</p>

//                                 </>




//                             )}


//                     </div>

//                     <div className='service-card'>

//                         <h2>Contact no.</h2>
//                         {
//                             VendorData.map((val) =>

//                                 <>

//                                     <p className='Employee-detail'>{val.mobileno}</p>

//                                 </>

//                             )}

//                     </div>

//                     <div className='service-card'>
//                         <h2>Email</h2>

//                         {
//                             VendorData.map((val) =>

//                                 <>

//                                     <p className='Employee-detail'>{val.email}</p>
//                                 </>
//                             )}
//                     </div>
//                     <div className='Add-emp-container'>

//                         <button className='Add-Vend-btn' onClick={AddEmpFunc}>Add Vendor</button>


//                     </div>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Vendor