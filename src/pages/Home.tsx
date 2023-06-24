import React, {useState} from 'react';
import InfoCards from '../components/InfoCards';
import {InfoCardsProps} from "../types/Custom/InfoCardType";
import Profile from "../components/Profile";

function Home() {
    document.title = "Home - Muras"

    const [infoCardList, setInfoCardList] = useState<InfoCardsProps[]>([{
        title: "Projects", link: "/projects",
        description: "A view of all project by Shan15Dev"
    }, {title: " About", link: "/about", description: "Some Facts about me"}, {
        title: "TimeTable",
        link: "/timetable",
        description: "TimeTable for my School"
    }])

    return (
        <div className="bg-base-100">
            <header className="bg-base-100">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-6xl font-bold text-primary text-slate-100">Ciao there,</h1>
                    <p className="text-center text-3xl text-slate-100 text-secondary mt-5">I'm Shan,</p>
                    <p className="text-center text-2xl text-slate-100 mt-5">a C# backend
                        developer, who specializes on RESTful APIs, microservices and Microsoft Services.</p>
                </div>
            </header>

        </div>
    );
}

export default Home;