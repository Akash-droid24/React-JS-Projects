import React from "react";
import "./SummaryBar.css";

function SummaryBar({ incidents }) {
  // Count P1 and P2 dynamically
  const p1Count = incidents.filter(inc => inc.priority === "P1").length;
  const p2Count = incidents.filter(inc => inc.priority === "P2").length;

  // Count resolved dynamically
  const resolvedCount = incidents.filter(inc => inc.status === "Resolved").length;

  return (
    <div className="summary-bar">
      <div className="summary-card p1">
        <h3>P1 Incidents</h3>
        <p>{p1Count}</p>
      </div>
      <div className="summary-card p2">
        <h3>P2 Incidents</h3>
        <p>{p2Count}</p>
      </div>
      <div className="summary-card resolved">
        <h3>Resolved</h3>
        <p>{resolvedCount}</p>
      </div>
    </div>
  );
}

export default SummaryBar;
