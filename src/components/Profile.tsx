import React, {useEffect, useState} from 'react';
import {GithubUser} from "../types/Github";
import {getGithubUser} from "../lib/api";

type ProfileProp = {
    profileName: string
}

function Profile({profileName}: ProfileProp) {
    const [profile, setProfile] = useState<GithubUser>();

    useEffect(() => {
        const loadProfile = async () => {
            const profileResp: GithubUser = await getGithubUser(profileName)
            setProfile(profileResp)
        }
        loadProfile()
    },);


    return (
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

    );
}

export default Profile;