import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Profile from "../components/Profile";
import Repositories from "../components/Repositories";

function Projects() {
    document.title = "Projects - Muras"

    const [profileName, setProfileName] = useState("shan15");

    return (
        <div className="bg-base-100">
            <Header title="Github"/>
            <Profile profileName={profileName}/>
            <Repositories profileName={profileName}/>
        </div>
    );
}

export default Projects;
