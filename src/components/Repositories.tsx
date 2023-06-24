import React, {useEffect, useState} from 'react';
import {GithubRepository} from "../types/Github/GithubRepositoryType";
import {getGithubRepositories} from "../lib/api";

type RepositoriesProps = {
    profileName: string
}

function Repositories({profileName}: RepositoriesProps) {
    const [repositories, setRepositories] = useState<GithubRepository[]>();

    useEffect(() => {
        const loadRepositories = async () => {
            const repositoryResp: GithubRepository[] = await getGithubRepositories(profileName)
            setRepositories(repositoryResp)
        }
        loadRepositories()
    }, [profileName]);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 place-items-center mt-5">
            {
                repositories?.map(repo => (
                    <div
                        className="card w-96 bg-primary text-primary-content cursor-pointer md:transform md:transition md:duration-500 md:hover:scale-105"
                        key={repo.id}>
                        <a href={repo.html_url}>
                            <div className="card-body">
                                <h2 className="card-title">{repo.name}</h2>
                                <p>{repo.description ? repo.description : "No description"}</p>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>);
}

export default Repositories;