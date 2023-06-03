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
            <Profile profileName="shan15"/>
            <InfoCards infoCardProps={infoCardList}/>
        </div>
    );
}

export default Home;