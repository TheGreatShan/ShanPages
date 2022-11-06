import React, {useEffect, useState} from 'react';
import {getGithubUser} from "../lib/api";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import {GithubUser} from "../types/Github";

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
        <div>
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src={profile?.avatar_url} alt={`Profile picture of ${profile?.login}`}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;