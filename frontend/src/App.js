import './App.css';
import React from "react";
import HomeView from './components/Home/HomeView';
import LoginView from './components/Login/LoginView';
import NewPosts from './components/NewPost/NewPost';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { LogContext } from "./context/LogContext";
import Posts from './components/Posts/Posts';

function App() {
  const [value, setValue] = useState(false);
  return (
    <Router>
      <LogContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/home" element={< HomeView />} />
          <Route path="/login" element={< LoginView />} />
          <Route path="/newPost" element={< NewPosts />} />
          <Route path="/posts/:country" element={< Posts />} />
          <Route path="/" element={< HomeView />} />
        </Routes>
      </LogContext.Provider>

    </Router>
  );
}

export default App;
