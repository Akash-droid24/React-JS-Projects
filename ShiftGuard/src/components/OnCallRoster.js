// src/components/OnCallRoster.js
import React, { useState, useEffect } from "react";
import "./OnCallRoster.css";

function OnCallRoster() {
  const [roster, setRoster] = useState(() => {
    const saved = localStorage.getItem("onCallRoster");
    return saved ? JSON.parse(saved) : [
      { name: "Alice Johnson", shift: "Day" },
      { name: "Bob Singh", shift: "Night" }
    ];
  });

  const [newMember, setNewMember] = useState({ name: "", shift: "" });

  useEffect(() => {
    localStorage.setItem("onCallRoster", JSON.stringify(roster));
  }, [roster]);

  const addMember = () => {
    if (newMember.name && newMember.shift) {
      setRoster([...roster, newMember]);
      setNewMember({ name: "", shift: "" });
    }
  };

  const removeMember = (index) => {
    setRoster(roster.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>On-Call Roster</h2>
      <ul>
        {roster.map((member, index) => (
          <li key={index}>
            <strong>{member.name}</strong> — {member.shift} Shift
            <button className="remove-btn" onClick={() => removeMember(index)}>✖</button>
          </li>
        ))}
      </ul>
      <div className="add-form">
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Shift"
          value={newMember.shift}
          onChange={(e) => setNewMember({ ...newMember, shift: e.target.value })}
        />
        <button onClick={addMember}>Add</button>
      </div>
    </div>
  );
}

export default OnCallRoster;
