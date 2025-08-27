import React, { useEffect, useState } from "react";
import "./LeaveDashboard.css";

const LeaveDashboard = ({ leaves }) => {
  const [prevCounts, setPrevCounts] = useState({ pending: 0, approved: 0, rejected: 0 });
  const [flash, setFlash] = useState({ pending: false, approved: false, rejected: false });

  const counts = {
    pending: leaves.filter(l => l.status === "Pending").length,
    approved: leaves.filter(l => l.status === "Approved").length,
    rejected: leaves.filter(l => l.status === "Rejected").length,
  };

  // Detect count changes to trigger flash
  useEffect(() => {
    const newFlash = { pending: false, approved: false, rejected: false };
    if (counts.pending !== prevCounts.pending) newFlash.pending = true;
    if (counts.approved !== prevCounts.approved) newFlash.approved = true;
    if (counts.rejected !== prevCounts.rejected) newFlash.rejected = true;

    setFlash(newFlash);
    setPrevCounts(counts);

    // Remove flash after animation
    const timer = setTimeout(() => setFlash({ pending: false, approved: false, rejected: false }), 500);
    return () => clearTimeout(timer);
  }, [counts]);

  return (
    <div className="leave-dashboard">
      <div className={`card pending ${flash.pending ? "flash" : ""}`}>
        <h3>Pending</h3>
        <p>{counts.pending}</p>
      </div>
      <div className={`card approved ${flash.approved ? "flash" : ""}`}>
        <h3>Approved</h3>
        <p>{counts.approved}</p>
      </div>
      <div className={`card rejected ${flash.rejected ? "flash" : ""}`}>
        <h3>Rejected</h3>
        <p>{counts.rejected}</p>
      </div>
    </div>
  );
};

export default LeaveDashboard;
