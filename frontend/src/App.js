import './App.css';
import React from "react";
import HomeView from './components/Home/HomeView';
import LoginView from './components/Login/LoginView';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={< HomeView />} />
        <Route path="/login" element={< LoginView />} />
        <Route path="/" element={< HomeView />} />
      </Routes>
    </Router>
  );
}

export default App;
