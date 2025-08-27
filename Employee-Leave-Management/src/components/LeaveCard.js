import React from "react";
import "./LeaveCard.css";

export default function LeaveCard({ leave }) {
  return (
    <div className={`leave-card ${leave.status.toLowerCase()}`}>
      <div className="row">
        <div className={`badge ${leave.type.toLowerCase()}`}>{leave.type}</div>
        <div className={`status ${leave.status.toLowerCase()}`}>{leave.status}</div>
      </div>
      <div className="dates">
        {leave.start} → {leave.end} <span>({leave.days} days)</span>
      </div>
      {leave.reason && <div className="reason">“{leave.reason}”</div>}
      <div className="meta">Requested by <strong>{leave.employee}</strong></div>
    </div>
  );
}
