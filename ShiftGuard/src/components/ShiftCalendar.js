// src/components/ShiftCalendar.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import "./ShiftCalendar.css";

const ShiftCalendar = () => {
  const [shifts] = useState([
    { date: "2025-08-25", name: "Alice", type: "Morning" },
    { date: "2025-08-26", name: "Bob", type: "Night" },
    { date: "2025-08-27", name: "Charlie", type: "Evening" },
    { date: "2025-08-28", name: "David", type: "Morning" },
  ]);

  return (
    <motion.div
      className="calendar-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>
        <FaCalendarAlt className="icon" /> Shift Calendar
      </h2>

      <div className="calendar-grid">
        {shifts.map((shift, index) => (
          <motion.div
            key={index}
            className={`calendar-card ${shift.type.toLowerCase()}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{shift.date}</h3>
            <p><strong>{shift.name}</strong></p>
            <span>{shift.type} Shift</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ShiftCalendar;
