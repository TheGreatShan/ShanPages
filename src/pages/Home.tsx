import React, {useState} from 'react';
import InfoCards from '../components/InfoCards';
import {InfoCardsProps} from "../types/Custom/InfoCardType";
import Profile from "../components/Profile";

function Home() {
    document.title = "Home - Muras"
    
    const [infoCardList, setInfoCardList] = useState<InfoCardsProps[]>([{
        title: "Projects",
        link: "/projects"
    }, {title: " About", link: "/about"}, {title : "BBW Winterthur TimeTable", link: "/timetable"}])

    return (
        <div className="bg-base-100">
            <Profile profileName="shan15dev"/>
            <InfoCards infoCardProps={infoCardList}/>
        </div>
    );
}

export default Home;