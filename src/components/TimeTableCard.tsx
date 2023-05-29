import React, {useState} from 'react';
import {InfoCardsProps} from '../types/Custom/InfoCardType';
import {Link} from "react-router-dom";
import {Subject} from "../types/Custom/SubjectType";

type Property = {
    subjects: Subject[]
}

function InfoCards({subjects}: Property) {
    const [infoProps, setInfoProps] = useState<Subject[]>(subjects)

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 place-items-center mt-5 bg-base-100">
            {
                infoProps.map(info => (
                    <div
                        className="card w-96 bg-primary text-primary-content cursor-pointer md:transform md:transition md:duration-500 md:hover:scale-125"
                        key={info.subject}>
                            <div className="card-body">
                                <h2 className="card-title">{info.subject}</h2>
                                <p>{info.start.seconds}</p>
                                <p>{info.end.seconds}</p>
                            </div>
                    </div>
                ))
            }
        </div>
    );
}

export default InfoCards;