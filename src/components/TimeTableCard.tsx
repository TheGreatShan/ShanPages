import React, {useEffect, useState} from 'react';
import {InfoCardsProps} from '../types/Custom/InfoCardType';
import {Link} from "react-router-dom";
import {Subject} from "../types/Custom/SubjectType";
import {getTimeTable} from "../lib/api";
import {it} from "node:test";

type Property = {
    day: string
}
const defaultModel: Subject[] = [{
    subject: "",
    room: "",
    start: {seconds: 0, nanoseconds: 0},
    end: {seconds: 0, nanoseconds: 0},

}]

function InfoCards({day}: Property) {
    const [infoProps, setInfoProps] = useState<Subject[]>(defaultModel)
    useEffect(() => {
        const fetchTimeTable = async () => {
            const timeTable = await getTimeTable(day);
            setInfoProps(timeTable)
        }
        fetchTimeTable()
    }, [])
    return (
        <div className="grid gap-5 place-items-center mt-5 bg-base-100">
            {
                infoProps.map(info => (
                    <div
                        className="card card-compact w-96 bg-primary text-primary-content cursor-pointer md:transform md:transition md:duration-500 md:hover:scale-105"
                        key={info.subject}>
                        <div className="card-body">
                            <h2 className="card-title">{info.subject}</h2>
                            <div className="grid grid-cols-2">
                                <p><span className="font-bold">Start: </span>{nanosecondsToDate(info.start.seconds * 1000000000 + info.start.nanoseconds).toLocaleTimeString()}</p>
                                <p><span className="font-bold">End: </span>{nanosecondsToDate(info.end.seconds * 1000000000 + info.end.nanoseconds).toLocaleTimeString()}</p>
                                <p><span className="font-bold">Place: </span>{info.room}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

function nanosecondsToDate(nanoseconds: number): Date {
    const seconds = Math.floor(nanoseconds / 1000000000);
    const milliseconds = nanoseconds / 1000000 - seconds * 1000;
    const date = new Date(0);
    date.setUTCSeconds(seconds);
    date.setUTCMilliseconds(milliseconds);
    return date;
}

export default InfoCards;