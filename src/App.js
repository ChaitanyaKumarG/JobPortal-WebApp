import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage';
import Userloginpage from './Pages/Userloginpage';
import Userdetailspage from './Pages/Userdetailspage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    
<div className="App">

  

<BrowserRouter>
<Routes>
<Route path='/' element={ <Homepage/>} exact/>
<Route path='/userlogin' element={<Userloginpage/>} exact/>
<Route path='/userdetailspage' element={<Userdetailspage/>} exact/>


</Routes>

</BrowserRouter>
      
    <Footer/>
    </div>
  );
}

export default App;
