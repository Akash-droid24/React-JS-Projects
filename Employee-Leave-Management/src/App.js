import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LeaveForm from "./components/LeaveForm";
import LeaveDashboard from "./components/LeaveDashboard";
import LeaveList from "./components/LeaveList";
import Notifications from "./components/Notifications";
import "./App.css";

function App() {
  const [leaves, setLeaves] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const addLeave = (leave) => {
    setLeaves([leave, ...leaves]);
    setNotifications([
      { message: `Leave request for ${leave.type} submitted`, type: "info" },
      ...notifications,
    ]);
  };

  const updateLeaveStatus = (index, status) => {
    const updatedLeaves = [...leaves];
    updatedLeaves[index].status = status;
    setLeaves(updatedLeaves);
    setNotifications([
      { message: `Leave ${status} for ${updatedLeaves[index].type}`, type: status === "Approved" ? "success" : "error" },
      ...notifications,
    ]);
  };

  return (
    <div className="App">
      
      <Navbar />
      <div className="main-container">
        <LeaveForm addLeave={addLeave} />
        <LeaveDashboard leaves={leaves} />
        <LeaveList leaves={leaves} updateLeaveStatus={updateLeaveStatus} />
        <Notifications notifications={notifications} />
      </div>
    </div>
  );
}

export default App;
