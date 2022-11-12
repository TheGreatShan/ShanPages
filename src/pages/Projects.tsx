import React, {useEffect, useState} from 'react';
import {getGithubUser} from "../lib/api";
import {GithubUser} from "../types/Github";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import Profile from "../components/Profile";

function Projects() {
    document.title = "Projects - Muras"


    return (
        <div className="bg-base-100">
            <Header title="Github"/>
            <Profile profileName="shan15dev"/>
        </div>
    );
}

export default Projects;