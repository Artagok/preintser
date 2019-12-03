import React, { useState } from "react";
import "./App.css";
import Navbar from "./compontents/Navbar";

function App() {
  // Global state
  // const [lang, changeLang] = useState(0);

  return (
    <div className="app-wrapper">
      <Navbar />
      <div style={{height: "2000px"}} />
    </div>
  );
}

export default App;
