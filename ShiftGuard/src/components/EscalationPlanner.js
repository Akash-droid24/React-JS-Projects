// src/components/EscalationPlanner.js
import React, { useState, useEffect } from "react";
import "./EscalationPlanner.css";

function EscalationPlanner() {
  const [plans, setPlans] = useState(() => {
    const saved = localStorage.getItem("escalationPlans");
    return saved ? JSON.parse(saved) : [
      { level: "L1", contact: "Alice" },
      { level: "L2", contact: "Bob" }
    ];
  });

  const [newPlan, setNewPlan] = useState({ level: "", contact: "" });

  useEffect(() => {
    localStorage.setItem("escalationPlans", JSON.stringify(plans));
  }, [plans]);

  const addPlan = () => {
    if (newPlan.level && newPlan.contact) {
      setPlans([...plans, newPlan]);
      setNewPlan({ level: "", contact: "" });
    }
  };

  const removePlan = (index) => {
    setPlans(plans.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>Escalation Planner</h2>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>
            <strong>{plan.level}</strong> — {plan.contact}
            <button className="remove-btn" onClick={() => removePlan(index)}>✖</button>
          </li>
        ))}
      </ul>
      <div className="add-form">
        <input
          type="text"
          placeholder="Level (e.g., L1)"
          value={newPlan.level}
          onChange={(e) => setNewPlan({ ...newPlan, level: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact"
          value={newPlan.contact}
          onChange={(e) => setNewPlan({ ...newPlan, contact: e.target.value })}
        />
        <button onClick={addPlan}>Add</button>
      </div>
    </div>
  );
}

export default EscalationPlanner;
