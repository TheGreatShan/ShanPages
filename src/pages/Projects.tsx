import React, {useEffect, useState} from 'react';
import {getGithubRepositories, getGithubUser} from "../lib/api";
import {GithubUser} from "../types/Github/GithubUserType";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import Profile from "../components/Profile";
import {GithubRepository} from "../types/Github/GithubRepositoryType";

function Projects() {
    document.title = "Projects - Muras"

    useEffect(() => {
        const loadRepositories = async () => {
            const repositoryResp: GithubRepository = await getGithubRepositories("shan15dev")
            console.log(repositoryResp)
        }
        loadRepositories()
    });


    return (
        <div className="bg-base-100">
            <Header title="Github"/>
            <Profile profileName="shan15dev"/>
        </div>
    );
}

export default Projects;