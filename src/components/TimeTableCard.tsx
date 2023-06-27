import React, {useEffect, useState} from 'react';
import {InfoCardsProps} from '../types/Custom/InfoCardType';
import {Link} from "react-router-dom";
import {Subject} from "../types/Custom/SubjectType";
import {getTimeTable} from "../lib/api";
import {it} from "node:test";

type Property = {
    day: Subject[]
}

function InfoCards({day}: Property) {

    return (
        <div className="grid gap-5 place-items-center mt-5 bg-base-100">
            {
                day.map(info => (
                    <div
                        className="card cursor-default card-compact w-1/4 bg-primary text-primary-content cursor-pointer md:transform md:transition md:duration-500 md:hover:scale-105"
                        key={info.subject}>
                        <div className="card-body">
                            <h2 className="card-title">{info.subject}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <p><span
                                    className="font-bold">Start: </span>{nanosecondsToDate(info.start.seconds * 1000000000 + info.start.nanoseconds).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}</p>
                                <p><span
                                    className="font-bold">End: </span>{nanosecondsToDate(info.end.seconds * 1000000000 + info.end.nanoseconds).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}</p>
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