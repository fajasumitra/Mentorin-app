import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailedMentor from "./pages/DetailedMentor";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mentor from "./pages/Mentor";
import UnderConstruction from "./pages/UnderConstruction";
import MyOrder from "./pages/MyOrder";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/myorder' element={<MyOrder />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/mentorT/" element={<DetailedMentor />} />
          <Route path="/error" element={<UnderConstruction />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
