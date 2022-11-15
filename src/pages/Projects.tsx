import React, {useEffect, useState} from 'react';
import {getGithubRepositories, getGithubUser} from "../lib/api/GithubAPI";
import {GithubUser} from "../types/Github/GithubUserType";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import Profile from "../components/Profile";
import {GithubRepository} from "../types/Github/GithubRepositoryType";
import Repositories from "../components/Repositories";

function Projects() {
    document.title = "Projects - Muras"

    const [profileName, setProfileName] = useState("shan15dev");

    return (
        <div className="bg-base-100">
            <Header title="Github"/>
            <Profile profileName={profileName}/>
            <Repositories profileName={profileName}/>
        </div>
    );
}

export default Projects;