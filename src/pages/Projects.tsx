import React, {useEffect, useState} from 'react';
import {getGithubUser} from "../lib/api";
import {Simulate} from "react-dom/test-utils";
import {GithubUser} from "../types/Github";
import Header from "../components/Header";

function Projects() {
    document.title = "Projects - Muras"

    const [profile, setProfile] = useState<GithubUser>();

    useEffect(() => {
        const loadProfile = async () => {
            const profileResp: GithubUser = await getGithubUser("shan15dev")
            setProfile(profileResp)
            console.log(profileResp)
        }
        loadProfile()
    },);


    return (
        <div className="bg-base-100">
            <Header title="Github"/>
            <div className="grid">
                <div className="avatar grid grid-cols-11">
                    <div className="w-24 rounded col-start-6">
                        <img className="content-center" src={profile?.avatar_url} alt={`Profile picture of ${profile?.login}`}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;