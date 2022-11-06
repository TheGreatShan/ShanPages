import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {GithubUser} from "../types/Github";

const githubLink: string = "https://api.github.com"
const githubUserLink: string = `${githubLink}/users`

export async function getGithubUser(username: string) : Promise<GithubUser> {
    return await fetch(`${githubUserLink}/${username}`).then(resp => {
        return resp.json();
    }).catch(error => {
        return Promise.reject(error);
    });
}

