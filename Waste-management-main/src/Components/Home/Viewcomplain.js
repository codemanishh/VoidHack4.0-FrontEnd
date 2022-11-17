import React from 'react'
import "./Viewcomplain.css"
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

function Employee() {
    const Navigate = useNavigate();
    const AddEmpFunc = () => {
        Navigate('/employeemanagementform')
    }
    const complainData = [
        {
            complainerName: "Rahul Mehta , ",
            Address: "Rajendra Nagar , Indore",
            Time: "27/12/2022 --- 10 AM",
            complain: `To

            The Municipal Commissioner,
            
            Indore , M.P.
            
            Subject: Complaint against the poor condition of the road.
            
            Respected Madam/Sir, 
            
            I am Rahul Mehta , resident of this city. I want to bring your kind attention to the poor condition of roads in Rajendra Nagar area. We faced heavy and prolonged rains this time and as a result, the roads have turned into a mesh of potholes. Needless to say, the divider and side markings have faded too.
            
            This is the main road which connects different busy roads. Thus, in order to travel safely through this path, people drive slowly. This not only causes them to reach their destination late, especially office or school but also lowers the overall pace of traffic. This adds to the agitation of people who have to reach their destination within the specified time. Moreover, this damages one's physical health travelling through this poor road. 
            
            I had already filed a complaint against this to the local representative but he hasn't paid heed to it. So, I request you to kindly look into this serious issue and resolve it as soon as for the well-being of the citizens.
            
            Thank you.
            
            Yours sincerely, 
            
            Rahul Mehta
            
            `
        } ,

        {
            complainerName: "Divyanshu Sharma , ",
            Address: "Bholaram ustad marg , Indore",
            Time: "15/9/2022 --- 10 AM",
            
            complain: `To

            The Municipal Commissioner,
            
            Indore , M.P.
            
            Subject: Complaint against the poor condition of the road.
            
            Respected Madam/Sir, 
            
            I am Divyanshu Sharma  , resident of this city. I want to bring your kind attention to the poor condition of roads in Bholaram ustad marg area. We faced heavy and prolonged rains this time and as a result, the roads have turned into a mesh of potholes. Needless to say, the divider and side markings have faded too.
            
            This is the main road which connects different busy roads. Thus, in order to travel safely through this path, people drive slowly. This not only causes them to reach their destination late, especially office or school but also lowers the overall pace of traffic. This adds to the agitation of people who have to reach their destination within the specified time. Moreover, this damages one's physical health travelling through this poor road. 
            
            I had already filed a complaint against this to the local representative but he hasn't paid heed to it. So, I request you to kindly look into this serious issue and resolve it as soon as for the well-being of the citizens.
            
            Thank you.
            
            Yours sincerely, 
            
            Rahul Mehta ,




            
            `
        }, 

        {
            complainerName: "Manish Kumar ," , 
            Address: "Vaishali Nagar , Indore",
            Time: "7/5/2022 --- 10 AM",
            complain: `To

            The Municipal Commissioner,
            
            Indore , M.P.
            
            Subject: Complaint against the poor condition of the road.
            
            Respected Madam/Sir, 
            
            I am Manish Kumar , resident of this city. I want to bring your kind attention to the poor condition of roads in Vaishali Nagar area. We faced heavy and prolonged rains this time and as a result, the roads have turned into a mesh of potholes. Needless to say, the divider and side markings have faded too.
            
            This is the main road which connects different busy roads. Thus, in order to travel safely through this path, people drive slowly. This not only causes them to reach their destination late, especially office or school but also lowers the overall pace of traffic. This adds to the agitation of people who have to reach their destination within the specified time. Moreover, this damages one's physical health travelling through this poor road. 
            
            I had already filed a complaint against this to the local representative but he hasn't paid heed to it. So, I request you to kindly look into this serious issue and resolve it as soon as for the well-being of the citizens.
            
            Thank you.
            
            Yours sincerely, 
            
            Rahul Mehta
            
            `
        } ,

        {
            complainerName: "Viraj Malhotra , ",
            Address: "Navlakha , Indore",
            Time: "20/5/2022 --- 10 AM",
            complain: `To

            The Municipal Commissioner,
            
            Indore , M.P.
            
            Subject: Complaint against the poor condition of the road.
            
            Respected Madam/Sir, 
            
            I am Viraj Malhotra  , resident of this city. I want to bring your kind attention to the poor condition of roads in Navlakha area. We faced heavy and prolonged rains this time and as a result, the roads have turned into a mesh of potholes. Needless to say, the divider and side markings have faded too.
            
            This is the main road which connects different busy roads. Thus, in order to travel safely through this path, people drive slowly. This not only causes them to reach their destination late, especially office or school but also lowers the overall pace of traffic. This adds to the agitation of people who have to reach their destination within the specified time. Moreover, this damages one's physical health travelling through this poor road. 
            
            I had already filed a complaint against this to the local representative but he hasn't paid heed to it. So, I request you to kindly look into this serious issue and resolve it as soon as for the well-being of the citizens.
            
            Thank you.
            
            Yours sincerely, 
            
            Rahul Mehta
            
            `
        }


    ]



    return (
        <div className='home'>
            <Sidebar />
            <div className='home-container'>
                <Navbar />


                <div className='service-container-data'>




                    <div className='service-card'>
                        <h2 style={{textAlign : "center"}} >Complain Box</h2>
                        {
                            complainData.map((val) =>

                                <>

                                    <p className='Employee-detail'>{val.complainerName}</p>
                                    <p className='Employee-detail'>{val.Address}</p>
                                    <p className='Employee-detail'>{val.Time}</p>
                                    <p className='Employee-detail'>{val.complain}</p>
                                    
                                    <hr></hr>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>

                                </>




                            )}

                    </div>


                   
                    <div className='Add-emp-container'>

                        {/* <button className='Add-emp-btn' onClick={AddEmpFunc}>Add Employee</button> */}


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Employee