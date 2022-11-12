import {GithubUser} from "../types/Github/GithubUserType";
import {GithubRepository} from "../types/Github/GithubRepositoryType";

const githubLink: string = "https://api.github.com"
const githubUserLink: string = `${githubLink}/users`

export async function getGithubUser(username: string): Promise<GithubUser> {
    return await fetch(`${githubUserLink}/${username}`).then(resp => {
        return resp.json();
    }).catch(error => {
        return Promise.reject(error);
    });
}

export async function getGithubRepositories(username: string): Promise<GithubRepository> {
    return await fetch(`${githubUserLink}/${username}/repos`).then(resp => {
        return resp.json();
    }).catch(error => {
        return Promise.reject(error);
    });
}

