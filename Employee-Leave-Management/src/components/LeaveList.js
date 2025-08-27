import React, { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./LeaveList.css";

const LeaveList = ({ leaves, updateLeaveStatus }) => {
  const [flashIndex, setFlashIndex] = useState(null);
  const [flashType, setFlashType] = useState("");

  const handleStatusChange = (index, status) => {
    updateLeaveStatus(index, status);
    setFlashIndex(index);
    setFlashType(status.toLowerCase());
    setTimeout(() => setFlashIndex(null), 800); // remove flash after animation
  };

  return (
    <div className="leave-list">
      <h2>Leave Requests</h2>
      {leaves.map((leave, index) => (
        <div
          key={index}
          className={`leave-item ${leave.status.toLowerCase()} ${
            flashIndex === index ? `flash-${flashType}` : ""
          }`}
        >
          <p><strong>Type:</strong> {leave.type}</p>
          <p><strong>Days:</strong> {leave.days}</p>
          <p><strong>Reason:</strong> {leave.reason}</p>
          <p><strong>Status:</strong> {leave.status}</p>
          {leave.status === "Pending" && (
            <div className="actions">
              <button onClick={() => handleStatusChange(index, "Approved")}><FaCheck /> Approve</button>
              <button onClick={() => handleStatusChange(index, "Rejected")}><FaTimes /> Reject</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeaveList;
