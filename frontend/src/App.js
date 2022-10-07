import './App.css';
import React from "react";
import HomeView from './components/Home/HomeView';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={< HomeView/>} />
        <Route path="/" element={< HomeView/>} />
      </Routes>
    </Router>
  );
}

export default App;
