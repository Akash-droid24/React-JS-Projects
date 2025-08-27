// src/components/Notifications.js
import React from "react";
import { FaInfoCircle, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "./Notifications.css";

const Notifications = ({ notifications }) => {
  const getIcon = (type) => {
    if (type === "info") return <FaInfoCircle />;
    if (type === "success") return <FaCheckCircle />;
    if (type === "error") return <FaExclamationCircle />;
  };

  return (
    <div className="notifications">
      {notifications.map((note, index) => (
        <div key={index} className={`note ${note.type}`}>
          {getIcon(note.type)} {note.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
