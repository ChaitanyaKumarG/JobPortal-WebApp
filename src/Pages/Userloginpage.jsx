import React from 'react'

const Userloginpage = () => {
  return (

    function authenticate() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Hardcoded user credentials for simplicity
            var validUsername = 'user';
            var validPassword = 'password';

            if (username === validUsername && password === validPassword) {
                alert('Login successful!');
                window.location.href = 'index.html';
                // You can redirect to another page or perform other actions here
            } else {
                alert('Invalid username or password. Please try again.');
            }
        }

    <div>

    <form className='border border-dark mx-auto w-25 my-auto form-control justify-content-start'>
    <h1 className='text-start'>UserName:</h1>
    <input className='form-control' placeholder='Enter_username' type=''/>
    <h1 className='text-start'>Password:</h1>
    <input className='form-control' placeholder='Enter_password' type='password'/>
    <button className='form-control mx-auto mt-3'>Login</button>
    </form>

    </div>
  )
}

export default Userloginpage