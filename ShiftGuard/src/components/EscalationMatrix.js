// src/components/EscalationMatrix.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import "./EscalationMatrix.css";

const EscalationMatrix = () => {
  const [levels, setLevels] = useState([
    { id: 1, level: "Level 1", contact: "John Doe - 9876543210" },
    { id: 2, level: "Level 2", contact: "Jane Smith - 9876543222" },
  ]);

  const [newLevel, setNewLevel] = useState("");
  const [newContact, setNewContact] = useState("");

  const addLevel = () => {
    if (newLevel && newContact) {
      setLevels([...levels, { id: Date.now(), level: newLevel, contact: newContact }]);
      setNewLevel("");
      setNewContact("");
    }
  };

  const deleteLevel = (id) => {
    setLevels(levels.filter((lvl) => lvl.id !== id));
  };

  return (
    <motion.div
      className="escalation-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Escalation Matrix</h2>
      <div className="escalation-form">
        <input
          type="text"
          placeholder="Escalation Level (e.g., Level 3)"
          value={newLevel}
          onChange={(e) => setNewLevel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact (e.g., Alex - 9876543333)"
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
        />
        <button onClick={addLevel}>
          <FaPlusCircle /> Add Level
        </button>
      </div>

      <div className="escalation-list">
        {levels.map((lvl) => (
          <motion.div
            key={lvl.id}
            className="escalation-item"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>
              <strong>{lvl.level}:</strong> {lvl.contact}
            </span>
            <FaTrashAlt className="delete-icon" onClick={() => deleteLevel(lvl.id)} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EscalationMatrix;
