import React from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import "./Alerts.css";

const Alerts = () => {
  const alerts = [
    { id: 1, message: "Alice missed shift handover!", type: "critical" },
    { id: 2, message: "Escalation triggered to L2", type: "warning" },
    { id: 3, message: "Shift reassigned to Charlie", type: "info" },
  ];

  return (
    <motion.div
      className="alerts"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2><FaExclamationTriangle /> Alerts</h2>
      <ul>
        {alerts.map((a) => (
          <motion.li
            key={a.id}
            className={`alert ${a.type}`}
            whileHover={{ scale: 1.02 }}
          >
            {a.message}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Alerts;
