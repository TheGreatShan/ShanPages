import React, {useEffect, useState} from 'react';
import {getGithubUser} from "../lib/api";
import {GithubUser} from "../types/Github";
import Header from "../components/Header";
import {Link} from "react-router-dom";

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
                <div className="avatar grid md:grid-cols-11 grid-cols-3">
                    <div
                        className="md:transform md:transition md:duration-500 md:hover:scale-125 w-full rounded md:col-start-6 col-start-2 cursor-pointer">
                        <a href={profile?.html_url}>

                            <img className="content-center" src={profile?.avatar_url}
                                 alt={`Profile picture of ${profile?.login}`}/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;