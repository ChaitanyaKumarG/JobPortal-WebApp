import React from 'react'
import Navbar from '../Components/Navbar'

const Homepage = () => {

    const backgroundStyle = {
    backgroundImage: 'url("https://cdn.wallpapersafari.com/51/27/78VlbA.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', 
    filter: 'blur(6px)',
    border:'none',
    filter: 'brightness(35%)'
   
  };



  return (
    
    <div>
      <Navbar/>
    

<div style={backgroundStyle} >

<div style={{zIndex:'2'}}>
<h1 className='text-white'>Hello</h1>
</div>

     
</div >

</div>

)
}

export default Homepage