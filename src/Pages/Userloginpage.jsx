
import React from 'react'

const Userloginpage = () => {

    function authenticate() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Hardcoded user credentials for simplicity
            var validUsername = 'ravi@skepitglobal.com';
            var validPassword = 'ravitej9@L';

            if (username === validUsername && password === validPassword) {
                 window.history.pushState(null, '', '/userdetailspage');
                // You can redirect to another page or perform other actions here
            } else {
                alert('Invalid username or password.');
            }
        }

    const backgroundStyle = {
    backgroundImage: 'url("https://wallpapercave.com/wp/wp8623049.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', 
 
    border:'none',

   
  };


  return (

    
  <div className=' center-container lp' style={backgroundStyle} >

  <div className='center-content '>
       <form className='border border-dark form-control justify-content-start'>
    <h6 className='text-start m-0 mb-1'>Username:</h6>
    <input  id='username' className='form-control' placeholder='enter username' type='' required/>
    <h6 className='text-start m-0 mt-3 mb-1'>Password:</h6>
    <input id='password' className='form-control' placeholder='enter password' type='password' required/>
    <button className='form-control bg-success bg-opacity-75 mx-auto mt-3' onClick={authenticate}>Login</button>
       </form>

  </div>
    </div>
  )
}

export default Userloginpage