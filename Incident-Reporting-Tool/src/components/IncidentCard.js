import React from "react";
import "./IncidentCard.css";

export default function IncidentCard({ incident }) {
  let severityClass = "normal";
  if (incident.title.toLowerCase().includes("p1")) severityClass = "p1";
  else if (incident.title.toLowerCase().includes("p2")) severityClass = "p2";

  return (
    <div className={`incident-card pop-in ${severityClass}`}>
      <div className="incident-header">
        <h3>{incident.title}</h3>
        <span className="severity-label">{severityClass.toUpperCase()}</span>
      </div>
      <p>{incident.description}</p>
      <span className="incident-date">{incident.date}</span>
    </div>
  );
}
