import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className={"flex flex-col h-screen justify-between"}>
                <Navbar/>
                <div className={"flex-grow mb-10"}>

                    <App/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    </React.StrictMode>
)
