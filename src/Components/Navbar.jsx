import React, { useState } from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap"
import { Link } from 'react-router-dom'
import {Modal} from '@mui/material'
const Navbar = () => {


const [smodal,setsmodal]=useState(false)

var sstyle ={
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: 430,
  backgroundColor: 'gray',
  height:280,
};
const imgstyle = {
 height: '80%'
}
const navclr = {
  backgroundColor: '#001a4d'
}

  return (
    
< div style={navclr} className="w-100  navbar justify-content-evenly  justify-content-evenly App" > 


<h1 className='text-white m-0' style={{fontFamily:"serif"}}> SKEP IT </h1> 


      
      <button className='btn border border-01 border-white' onClick={()=>{setsmodal(true)}}>   <h6 className=' m-0 text-white'>Login</h6> </button>
      
        
<Modal  open={smodal} onClose={()=>{setsmodal(false)}}>

     <div style={sstyle} className='d-flex border border-white'>

<div className='w-50 bg-primary bg-opacity-25 border p-2'>
  <div className='h-75 mb-3'>
  <img style={{imgstyle}} src='https://th.bing.com/th/id/R.d3577ea04a87de8a17a0c4da1599f14f?rik=tyHhffAFBiEkuQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_325791.png&ehk=JLU5qFTRDFwXx3RCfbNOak3HCyy3uDphKbj2yWjqR1k%3d&risl=&pid=ImgRaw&r=0' className='w-100 p-5'/>
</div>

    <a className='btn w-100 text-align-center border border-dark' href='/'> <h5>Admin Login</h5></a>

</div>
      
      <div className='w-50 bg-primary bg-opacity-25 border p-2'>
      <div className='h-75 mb-3'>
          <img style={{imgstyle}}  src='https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png' className='w-100 p-5'/>
      </div>

    <a className='btn w-100 text-align-center border border-dark' href='/userlogin'> <h5>User Login</h5></a>

</div>
    </div>

</Modal>



</div>
  )
}

export default Navbar