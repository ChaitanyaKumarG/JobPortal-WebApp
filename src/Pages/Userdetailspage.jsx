import { CircularProgress, LinearProgress, Rating } from "@mui/material"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Postingdetails from "./Postingdetails";

const Userdetailspage = () => {
  const ps = {
    height: '100vh',
  }


  const lb ={
    height: '10%'
  }

//   const[apidata ,setapidata]= useState()

// const apirequest = async() => {
  
// const  fetchdata = new FormData()
//   const response = await axios.post('http://127.0.0.1:9075/users',fetchdata,{'content-type':'multipart/form-data'})
//   if(response){
//     console.log("got response");
//     if(response.data){
//       console.log("Data Recived");
//       console.log(response.data);
//       setapidata(response.data)
//     }
//   }else{
//         console.log("No response from API"); 
//     }
// }

// useEffect (()=>{
//   apirequest()
// },[])


  return (
    <div style={ps} className=' bg-dark d-flex'>
     
  <div className="ls">
 <div className="justify-content-start container justify-space-evenly" style={lb} > 
    <a href="/userlogin" className="btn  m-0 me-4 mt-3 bg-danger">Logout</a>
<button className="btn    m-0 mt-3 bg-dark bg-opacity-75 text-white ">Edit Profile</button>

 </div>


 <div className="h-100 ">

   <img className="w-100 p-5" src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"/>
   <h4 className="m-0 mt-0 ">Sanajay Saahu</h4>
   <h5 className="mt-2">Recruiter @Skep IT</h5>
   <p>Recruiter details</p>
   <p>Recruiter details</p>
   <p>Recruiter details</p>
   <p>Recruiter details</p>

 </div>
  </div>

<div className="text-white w-100">
 <h3 className="tas ms-3 mb-5">Job Postings:</h3>


    <div className="border border-white tas w-75 mx-auto p-3 mb-3" >
    <h5>Job1</h5>
    <p>Job description</p>
      </div>
   
   <div className="border border-white w-75 mx-auto p-3 mb-3" >
    <h5 className="tas ">Job1</h5>
    <p className="tas ">Job description</p>
    <a href="/postingdetails" className="btn bg-white bg-opacity-50 ae">Details</a>
   </div>
</div>
{/* {apidata?<>
</>:

<>
<LinearProgress color="secondary"/> 
</>} */}



    </div>
  )
}

export default Userdetailspage

