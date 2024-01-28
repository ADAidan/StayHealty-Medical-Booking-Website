import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/Landing_Page/LandingPage';
import SignUp from './components/Sign_Up/Sign_Up';
import Login from './components/Login/Login';
import InstantConsultation from './components/BookingConsultation/BookingConsultation';
import Notification from './components/Notification/Notification';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ReviewForm from './components/ReviewForm/ReviewForm';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Notification>
              <Routes>
                  <Route path="/" element={<LandingPage/>} />
                  <Route path="/signup" element={<SignUp/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/instant-consultation" element={<InstantConsultation/>} />
                  <Route path="/profile" element={<ProfileCard/>} />
                  <Route path="/reviews" element={<ReviewForm/>} />
              </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;