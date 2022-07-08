import React, { useState } from "react";
import "../Styles/FrontForm.css";
export default function FrontForm() {
  const [toggleform, settoggleform] = useState(true);
  return (
    <div className="formContainer">
      <div className="headingContainer">
        <h1 className="loginText" onClick={() => settoggleform(true)}>
          Login
        </h1>
        <h1 className="registerText" onClick={() => settoggleform(false)}>
          Register form
        </h1>
      </div>
      {toggleform && (
        <div className="loginForm">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="btn">Login</button>
          <div className="forgot">
            <a className="for" href="#">
              Forgot Password
            </a>
          </div>
        </div>
      )}
      {!toggleform && (
        <div className="registerForm">
          <input type="text" placeholder="Employee ID " />
          <input type="text" placeholder="Employee Name" />
          <input type="text" placeholder="Employee Address" />
          <input type="text" placeholder="Employee D.O.B" />
          <input type="text" placeholder="Employee City" />
          <input type="text" placeholder="Employee State" />
          <input type="text" placeholder="Employee Pincode" />
          <input type="text" placeholder="Employee Mobile" />
          <input type="text" placeholder="Job Type" />
          <input type="text" placeholder="Experience" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />

          <button className="btn">Submit</button>
          <div className="forgot">
            <button></button>
          </div>
        </div>
      )}
    </div>
  );
}
