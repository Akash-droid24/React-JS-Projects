// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import OnCallRoster from "./components/OnCallRoster";
import EscalationPlanner from "./components/EscalationPlanner";
import EscalationMatrix from "./components/EscalationMatrix";
import Alerts from "./components/Alerts";
import Team from "./components/Team";
import "./App.css";

function App() {
  const stats = {
    onCall: "3 Engineers",
    escalations: 5,
    totalShifts: 12,
  };

  const matrix = [
    { role: "L1 (Primary)", name: "Alice Johnson", contact: "+91 90000 00001" },
    { role: "L2 (Secondary)", name: "Bob Singh", contact: "+91 90000 00002" },
    { role: "L3 (Manager)", name: "Charlie Rao", contact: "+91 90000 00003" },
    { role: "Incident Commander", name: "Neha Verma", contact: "+91 90000 00004" },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className="page">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="hero">
                    <div className="hero-bg">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="hero-content">
                      <h1>ShiftGuard</h1>
                      <p>
                        Plan on-call rotations, visualize escalation paths, and stay ahead of
                        incidents with a crisp, responsive dashboard.
                      </p>
                      <button className="hero-btn">Get Started 🚀</button>
                    </div>
                  </section>

                  <section className="block">
                    <Dashboard stats={stats} />
                  </section>
                </>
              }
            />
            <Route path="/roster" element={<OnCallRoster />} />
            <Route path="/planner" element={<EscalationPlanner />} />
            <Route path="/matrix" element={<EscalationMatrix matrix={matrix} />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} ShiftGuard • On-Call Roster & Escalation Planner
        </footer>
      </div>
    </Router>
  );
}

export default App;
