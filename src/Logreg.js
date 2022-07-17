import React from "react";
import "./App.css";
import FrontForm from "./Components/FrontForm";

export default function Logreg() {
  return (
    <div className="App">
      <div className="leftSide">
        <h1 className="title">Leave Management</h1>
      </div>

      <div className="rightSide">
        <FrontForm />
      </div>
    </div>
  );
}
