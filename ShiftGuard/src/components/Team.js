import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import "./Team.css";

const Team = () => {
  const team = [
    { id: 1, name: "Alice", role: "L1 Engineer" },
    { id: 2, name: "Bob", role: "L2 Engineer" },
    { id: 3, name: "Charlie", role: "Manager" },
  ];

  return (
    <motion.div
      className="team"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Team Members</h2>
      <div className="team-grid">
        {team.map((t) => (
          <motion.div
            key={t.id}
            className="team-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserCircle size={50} />
            <h3>{t.name}</h3>
            <p>{t.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
