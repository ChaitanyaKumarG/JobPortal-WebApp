import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage';
import Userloginpage from './Pages/Userloginpage';

function App() {
  return (
    <div className="App">


  

<BrowserRouter>
<Routes>
<Route path='/' element={ <Homepage/>} exact/>
<Route path='/userlogin' element={<Userloginpage/>} exact/>


</Routes>

</BrowserRouter>
      
    
    </div>
  );
}

export default App;
