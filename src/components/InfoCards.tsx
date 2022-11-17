import React from 'react';

function InfoCards() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 place-items-center mt-5">
            {
                repositories?.map(repo => (
                    <div
                        className="card w-96 bg-primary text-primary-content cursor-pointer md:transform md:transition md:duration-500 md:hover:scale-125"
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
        </div>
    );
}

export default InfoCards;