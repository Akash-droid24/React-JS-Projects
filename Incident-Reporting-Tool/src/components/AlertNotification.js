import React, { useEffect, useState } from "react";
import "./AlertNotification.css";

export default function AlertNotification({ incidents }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Trigger alerts for P1 incidents that are unresolved
    const unresolvedP1s = incidents.filter(
      (i) => i.severity === "P1" && i.status !== "Resolved"
    );

    // Only add alerts if not already in alerts array
    const newAlerts = unresolvedP1s.filter(
      (i) => !alerts.find(a => a.id === i.id)
    );

    if (newAlerts.length) {
      setAlerts((prev) => [...prev, ...newAlerts]);
    }
  }, [incidents, alerts]);

  useEffect(() => {
    // Auto remove alerts after 5 seconds
    const timers = alerts.map((alert) =>
      setTimeout(() => {
        setAlerts((prev) => prev.filter((a) => a.id !== alert.id));
      }, 5000)
    );
    return () => timers.forEach((t) => clearTimeout(t));
  }, [alerts]);

  return (
    <div className="alert-container">
      {alerts.map((alert) => (
        <div key={alert.id} className="alert-card">
          <span className="alert-icon">🔥</span>
          <div>
            <p><strong>New P1 Incident:</strong> {alert.title}</p>
            <small>{alert.date}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
