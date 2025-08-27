import React, { useState } from "react";
import IncidentCard from "./IncidentCard";
import "./IncidentList.css";

export default function IncidentList({ incidents }) {
  const [filter, setFilter] = useState("All");

  const filteredIncidents =
    filter === "All"
      ? incidents
      : incidents.filter((inc) =>
          filter === "P1"
            ? inc.title.toLowerCase().includes("p1")
            : inc.title.toLowerCase().includes("p2")
        );

  return (
    <div className="incident-list-container" id="incidents">
      <h2 className="list-title">Reported Incidents</h2>

      <div className="filter-bar">
        {["All", "P1", "P2"].map((type) => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {filteredIncidents.length === 0 ? (
        <p className="no-incident">No incidents found 😎</p>
      ) : (
        <div className="incident-grid">
          {filteredIncidents.map((incident, index) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
