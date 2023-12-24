import React from "react";
import RoutesList from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <RoutesList />
    </Router>
  );
}

export default App;
