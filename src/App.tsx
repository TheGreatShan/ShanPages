import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from './pages/NotFound';


function App() {
    return (
            <div className="bg-base-100" id="root">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </div>
    )
}

export default App
