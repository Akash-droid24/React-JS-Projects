import React from "react";
import "./IncidentTimeline.css";

export default function IncidentTimeline({ incidents }) {
  const getSeverityIcon = (severity) => {
    if (severity === "P1") return "🔥";
    if (severity === "P2") return "⚠️";
    return "ℹ️"; // default for normal
  };

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Incident Timeline</h2>
      <div className="timeline">
        {incidents.map((incident, index) => (
          <div
            key={incident.id}
            className={`timeline-item ${incident.severity.toLowerCase()}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <span className="timeline-icon">{getSeverityIcon(incident.severity)}</span>
            <span className="timeline-date">{incident.date}</span>
            <h3>{incident.title}</h3>
            <p>{incident.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
