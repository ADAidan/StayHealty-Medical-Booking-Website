import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    console.log(storedDoctorData)
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));
    console.log('data', storedAppointmentData)

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);
  return (
    <div>
      <Navbar ></Navbar>
      {children}
      {isLoggedIn && doctorData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <p><strong>Doctor:</strong> {doctorData[0].name}</p>
                <p><strong>Date:</strong> {doctorData[0].date} </p>
                <p><strong>Time:</strong> {doctorData[0].selectedSlot}</p>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;