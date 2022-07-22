import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/Home.css";
import ChangePassword from "./ChangePassword";
import DashBoard from "./DashBoard";
import GatePass from "./GatePass";
import LeaveBalance from "./LeaveBalance";
import LeaveStatus from "./LeaveStatus";
import Logout from "./Logout";
import Public from "./Public";

export default function Home() {
  const [click, setClick] = useState("");

  return (
    <div className="home">
      <div className="DashBoard">
        <h3 className="tit">Leave Management System</h3>
        <h4 onClick={()=>{setClick("dashBoard")}}>DashBoard</h4>
        <h4
          onClick={() => {
            setClick("Public Holiday");
          }}
        >
          Public Holiday
        </h4>
        <h4
          onClick={() => {
            setClick("LeaveAppStatus");
          }}
        >
          Leave App Status
        </h4>
        <h4
          onClick={() => {
            setClick("LeaveBalance");
          }}
        >
          Leave Balance
        </h4>
        <h4
          onClick={() => {
            setClick("ChangePassword");
          }}
        >
          Change Password
        </h4>
        <h4
          onClick={() => {
            setClick("GatePass");
          }}
        >
          Gate Pass
        </h4>
        <h4
          classname="logout"
          onClick={() => {
            setClick("Logout");
          }}
        >
          Logout
        </h4>
      </div>
      <div>{click === "dashBoard" && <DashBoard />}</div>
      <div>{click === "Public Holiday" && <Public />}</div>
      <div>{click === "LeaveBalance" && <LeaveBalance />}</div>
      <div>{click === "LeaveAppStatus" && <LeaveStatus />}</div>
      <div>{click === "ChangePassword" && <ChangePassword />}</div>
      <div>{click === "GatePass" && <GatePass />}</div>
      <div>{click === "Logout" && <Logout />}</div>
    </div>
  );
}
