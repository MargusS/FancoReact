import './App.css';
import React from "react";
import HomeView from './components/Home/HomeView';
import LoginView from './components/Login/LoginView';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedView from './components/Logged/LoggedView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={< HomeView />} />
        <Route path="/login" element={< LoginView />} />
        <Route path="/logged" element={< LoggedView />} />
        <Route path="/" element={< HomeView />} />
      </Routes>
    </Router>
  );
}

export default App;
