import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form");

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Email Error: ", emailError);
    console.log("Password Error: ", passwordError);

    // Submit the form
  };


  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text">
          Are you a new member?{" "}
          <span>
            <a href="../Sign_Up/Sign_Up.html" style={{ color: "#2190FF" }}>
              {" "}
              Sign Up Here
            </a>
          </span>
        </div>
        <br />
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${emailError ? "form-error" : "form-control"}`}
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
              {emailError && <p className="error-message">Email is not valid</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>

            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
            <br />
            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;