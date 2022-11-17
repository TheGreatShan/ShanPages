import React, {useState} from 'react';
import { InfoCardsProps } from '../types/Custom/InfoCardType';



function InfoCards(infoCardProps : InfoCardsProps[]) {
    const [infoProps, setInfoProps] = useState<InfoCardsProps[]>(infoCardProps)
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 place-items-center mt-5">
            {
                infoProps.map(info => (
                    <div
                        className="card w-96 bg-primary text-primary-content cursor-pointer md:transform md:transition md:duration-500 md:hover:scale-125"
                        key={info.title}>
                        <a href={info.link}>
                            <div className="card-body">
                                <h2 className="card-title">{info.title}</h2>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    );
}

export default InfoCards;