import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Landing_Page/LandingPage';
import SignUp from './components/Sign_Up/Sign_Up';
import Login from './components/Login/Login';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                  <Route path="/" element={<LandingPage/>} />
                  <Route path="/signup" element={<SignUp/>} />
                  <Route path="/login" element={<Login/>} />
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;