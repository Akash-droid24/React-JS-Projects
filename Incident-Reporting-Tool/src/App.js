import React, { useState } from "react";
import Navbar from "./components/Navbar";
import IncidentForm from "./components/IncidentForm";
import IncidentList from "./components/IncidentList";
import IncidentTimeline from "./components/IncidentTimeline";
import SummaryBar from "./components/SummaryBar";
import AlertNotification from "./components/AlertNotification";
import "./App.css";

function App() {
  const [incidents, setIncidents] = useState([]);

  const handleAddIncident = (incident) => {
    setIncidents([incident, ...incidents]);
  };

  return (
    <div>
      <Navbar />
      <IncidentForm addIncident={handleAddIncident} /> {/* ✅ prop name must match */}
      <SummaryBar incidents={incidents} />
      <IncidentList incidents={incidents} />
      <IncidentTimeline incidents={incidents.filter(i => i.severity === "P1" || i.severity === "P2")} />
      <AlertNotification incidents={incidents} />
    </div>
  );
}

export default App;

{/*The current AlertNotification component only adds alerts when the incidents array changes (useEffect watches incidents), so when you refresh the page, the state is empty and no alerts appear. That’s why you don’t see the alerts on reload.

To fix this, we need to trigger alerts for all unresolved P1 incidents on initial render as well. Here’s how to modify it:*/ }