import React from "react";
import "./Dashboard.css";
import { motion } from "framer-motion";
import { FaUserMd, FaExclamationTriangle, FaClipboardList } from "react-icons/fa";

const Dashboard = ({ stats }) => {
  return (
    <div className="dashboard">
      <motion.div
        className="stat-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <FaUserMd className="icon doctor" />
        <h3>On-Call Today</h3>
        <p>{stats.onCall}</p>
      </motion.div>

      <motion.div
        className="stat-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <FaExclamationTriangle className="icon alert" />
        <h3>Escalations Pending</h3>
        <p>{stats.escalations}</p>
      </motion.div>

      <motion.div
        className="stat-card"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <FaClipboardList className="icon roster" />
        <h3>Total Shifts</h3>
        <p>{stats.totalShifts}</p>
      </motion.div>
    </div>
  );
};

export default Dashboard;
