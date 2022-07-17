import React, { useState } from "react";
import "../Styles/FrontForm.css";
export default function FrontForm() {
  const [toggleform, settoggleform] = useState(true);
  return (
    <div className="formContainer">
      <div className="headingContainer">
        <h1 className="loginText">{toggleform ? "LOGIN" : "REGISTER"}</h1>
      </div>
      {toggleform && (
        <div className="loginForm">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="btn">Login</button>
          <div className="forgot">
            <a href="#">
              <p className="cursorPointer">Forgot Password</p>
            </a>
            <p className="cursorPointer" onClick={() => settoggleform(false)}>
              New Register
            </p>
          </div>
        </div>
      )}
      {!toggleform && (
        <div className="registerForm">
          <div className="Detail1">
            <input type="text" placeholder="ID " />
            <input style={{ marginRight: 0 }} type="text" placeholder="Name" />
          </div>
          <input type="text" placeholder="Address" />
          <div className="Detail1">
            <input type="text" placeholder="Job Type" />
            <input
              style={{ marginRight: 0 }}
              type="text"
              placeholder="Experience"
            />
          </div>
          <div className="Detail1">
            <input type="text" placeholder="D.O.B" />
            <input style={{ marginRight: 0 }} type="text" placeholder="City" />
          </div>
          <div className="Detail1">
            <input type="text" placeholder="State" />
            <input
              style={{ marginRight: 0 }}
              type="text"
              placeholder="Pincode"
            />
          </div>
          <input type="text" placeholder="Mobile" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />

          <button className="btn">Submit</button>
          <div className="forgot">
            <button></button>
          </div>
        </div>
      )}
      <div className="LoginSignupDiv">
        <p className="loginButton" onClick={() => settoggleform(true)}>
          Login
        </p>
        <p className="registerButton" onClick={() => settoggleform(false)}>
          Register
        </p>
      </div>
    </div>
  );
}
