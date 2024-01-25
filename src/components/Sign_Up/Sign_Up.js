import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        let json;

        console.log("Submitted form");
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Phone: ", phone);
        console.log("Password: ", password);
        console.log("Error: ", showerr);

        try {
            // API Call
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                }),
            });

            if (!response.ok) {
                json = await response.json();
                console.log('Error:', json);
                setShowerr(json.error);
            } else {
                json = await response.json();
                console.log("Success:", json);
            }

            if (json.authtoken) {
                sessionStorage.setItem("auth-token", json.authtoken);
                sessionStorage.setItem("name", name);
                // phone and email
                sessionStorage.setItem("phone", phone);
                sessionStorage.setItem("email", email);
                // Redirect to home page
                console.log("creating account")
                navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
                window.location.reload();
                console.log("account created")
            } else {
                if (json.errors) {
                    for (const error of json.errors) {
                        setShowerr(error.msg);
                    }
                } else {
                    setShowerr(json.error);
                }
            }

            console.log(json);
        } catch (error) {
            console.error("Error:", error);
            setShowerr("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container" style={{marginTop:'10%'}}>
        <div className="signup-grid">
        <div className="signup-form">
         <form method="POST" onSubmit={register}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                 {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="phone" id="phone" className="form-control" placeholder="Enter your phone" aria-describedby="helpId" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
         </form>
         </div>
         </div>
        </div>
 //Sign up role is not stored in database. You can apply logic for this according to your react code.
    );
}

export default Sign_Up;