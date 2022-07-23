import React from "react";
import { useState } from "react";
import "../Styles/Home.css";
import ChangePassword from "./ChangePassword";
import DashBoard from "./DashBoard";
import GatePass from "./GatePass";
import LeaveBalance from "./LeaveBalance";
import LeaveStatus from "./LeaveStatus";
import Logout from "./Logout";
import Public from "./Public";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import { AiOutlineHome,AiOutlineBook,AiOutlineForm,AiOutlineGift,AiOutlineNotification,AiOutlinePoweroff,AiOutlineMenuUnfold } from "react-icons/ai";
export default function Home() {
  const [click, setClick] = useState("dashBoard");
  const [sideWidth, setSideWidth] = useState(true)
  const sideBarAnimationFunction=()=>{
    setSideWidth(!sideWidth)
  }
  return (
    <div className="homeContainer">
      <div style={{width:sideWidth ? "15%" : "4%",backgroundColor:"#1363DF"}}>
      <div className="TopTitle" onClick={sideBarAnimationFunction}>
      {
        sideWidth ?
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <p className="logoName">Jeeva Tech</p>
        <FaAngleLeft color="white" size={20}/>
        </div> : <AiOutlineMenuUnfold size={30} />
      }
      </div>
      <div className="sideMenuTitle" onClick={() => { setClick("dashBoard") }}>
        <AiOutlineHome size={sideWidth ? 20 : 25}/>
      {sideWidth && <p className="sideBarName">DashBoard</p>}
      </div>
      <div className="sideMenuTitle" onClick={() => { setClick("publicHoliday") }}>
        <AiOutlineGift size={sideWidth ? 20 : 25}/>
      {sideWidth && <p className="sideBarName">Public Holiday</p>}
      </div>
      <div className="sideMenuTitle" onClick={() => { setClick("leaveBalance") }}>
        <AiOutlineBook size={sideWidth ? 20 : 25}/>
      {sideWidth && <p className="sideBarName">Leave Balance</p>}
      </div>
      <div className="sideMenuTitle" onClick={() => { setClick("changePassword") }}>
        <AiOutlineForm size={sideWidth ? 20 : 25}/>
      {sideWidth && <p className="sideBarName">Change Password</p>}
      </div>
      <div className="sideMenuTitle" onClick={() => { setClick("gatePass") }}>
        <AiOutlineNotification size={sideWidth ? 20 : 25}/>
      {sideWidth && <p className="sideBarName">Gate Pass</p>}
      </div>
      <div className="sideMenuTitle" onClick={() => { setClick("logout") }}>
        <AiOutlinePoweroff size={sideWidth ? 20 : 25}/>
      {sideWidth && <p className="sideBarName">Logout</p>}
      </div>
      </div>
      <div className="mainContentConatiner">
        <div>{click === "dashBoard" && <DashBoard />}</div>
        <div>{click === "publicHoliday" && <Public />}</div>
        <div>{click === "leaveAppStatus" && <LeaveStatus />}</div>
        <div>{click === "leaveBalance" && <LeaveBalance />}</div>
        <div>{click === "changePassword" && <ChangePassword />}</div>
        <div>{click === "gatePass" && <GatePass />}</div>
        <div>{click === "logout" && <Logout />}</div>
      </div>
    </div>
  );
}
