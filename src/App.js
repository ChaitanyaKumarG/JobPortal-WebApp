import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage';
import Userloginpage from './Pages/Userloginpage';
import Userdetailspage from './Pages/Userdetailspage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Postingdetails from './Pages/Postingdetails';
import Finalpage from './Pages/Finalpage';

function App() {
  return (
    
<div className="App">

  

<BrowserRouter>
<Routes>
<Route path='/' element={ <Homepage/>} exact/>
<Route path='/userlogin' element={<Userloginpage/>} exact/>
<Route path='/userdetailspage' element={<Userdetailspage/>} exact/>
<Route path= '/postingdetails' element={<Postingdetails/>} exact />
<Route path='/finalpage' element={<Finalpage/>} exact/>


</Routes>

</BrowserRouter>
      
    <Footer/>
    </div>
  );
}

export default App;
