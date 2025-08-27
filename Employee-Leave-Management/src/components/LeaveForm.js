import React, { useState } from "react";
import "./LeaveForm.css";

const LeaveForm = ({ addLeave }) => {
  const [type, setType] = useState("Sick");
  const [reason, setReason] = useState("");
  const [days, setDays] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addLeave({ type, reason, days, status: "Pending" });
    setReason("");
    setDays(1);
  };

  return (
    <div className="leave-form">
      <h2>Submit Leave Request</h2>
      <form onSubmit={handleSubmit}>
        <label>Leave Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Sick</option>
          <option>Casual</option>
          <option>Paid</option>
        </select>

        <label>Reason:</label>
        <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} required />

        <label>Number of Days:</label>
        <input type="number" value={days} onChange={(e) => setDays(e.target.value)} min="1" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveForm;
