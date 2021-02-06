import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
// import logo from './logo.svg';
import './assets/App.css';
import AllContent from "./components/AllContent";

function App() {
  return (
    <Router>
      <AllContent />
    </Router>
  );
}

export default App;
