import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Mission from './Components/Mission/Mission';
import rocket from './Components/Rocket/rocket';
import profile from './Components/My-profile/profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<rocket />} />
        <Route exact path="/mission" element={<Mission />} />
        <Route exact path="/profile" element={<profile />} />
      </Routes>
    </Router>
  );
}

export default App;
