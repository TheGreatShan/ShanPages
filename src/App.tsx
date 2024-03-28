import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import TimeConverter from "./pages/TimeConverter";
import Timetable from "./pages/Timetable";
import Banana from "./pages/Banana";

function App() {
  return (
    <div className="bg-base-100" id="root">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/timetable" element={<Timetable />}></Route>
        <Route path="/ssbd" element={<TimeConverter />}></Route>
        <Route path="/wow" element={<Banana />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
