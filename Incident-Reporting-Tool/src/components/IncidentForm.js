import React, { useState } from "react";
import "./IncidentForm.css";

export default function IncidentForm({ addIncident }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    setLoading(true);

    setTimeout(() => {
      addIncident({
        id: Date.now(),
        title,
        description,
        date: new Date().toLocaleString(),
      });
      setTitle("");
      setDescription("");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="form-container" id="report">
      <h2>Report an Incident</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Incident Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
        <textarea
          placeholder="Describe the incident..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : "Submit Report"}
        </button>
      </form>
    </div>
  );
}
