import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import HireProfessionals from './Pages/HireProfessionals';
import Courses from './Pages/Courses';
import AboutWithires from './Pages/AboutWithires';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutwithires" element={<AboutWithires />} />
      <Route path="/hireprofessionals" element={<HireProfessionals />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
