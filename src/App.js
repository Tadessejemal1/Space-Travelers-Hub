import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Mission from './Components/Mission/mission';
import Rocket from './Components/Rocket/rocket';
import Profile from './Components/My-profile/profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Rocket />} />
        <Route exact path="/mission" element={<Mission />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
