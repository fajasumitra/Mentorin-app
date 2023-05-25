import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailedMentor from "./pages/DetailedMentor";
import Home from "./pages/Home";
import Mentor from "./pages/Mentor";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/mentorT/" element={<DetailedMentor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
