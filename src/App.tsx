import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


function App() {
    return (<Router>
            <div className="bg-base-100" id="root">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                </Routes>
            </div>
        </Router>

    )
}

export default App
