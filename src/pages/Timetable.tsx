import React, {useEffect, useState} from "react";
import {Subject} from "../types/Custom/SubjectType";
import TimeTableCard from "../components/TimeTableCard";
import {getDocumentNames, getTimeTable} from "../lib/api";

const defaultModel: Subject[] = [{
    subject: "",
    room: "",
    start: {seconds: 0, nanoseconds: 0},
    end: {seconds: 0, nanoseconds: 0},

}]

function Timetable() {
    const [documents, setDocuments] = useState<string[]>([]);
    const [day, setDay] = useState<string>("friday");
    const [infoProps, setInfoProps] = useState<Subject[]>(defaultModel);

    document.title = "Timetable - Muras";
    useEffect(() => {
        const loadDocs = async () => {
            const documents = await getDocumentNames("timetable");
            setDocuments(documents);
        };
        loadDocs();
    }, []);

    useEffect(() => {
        const fetchTimeTable = async () => {
            const timeTable = await getTimeTable(day);
            setInfoProps(timeTable);
        };
        fetchTimeTable();
    }, [day]);

    return (
        <div>
            <div className={"grid gap-5 place-items-center mt-5 bg-base-100"}>
                <select onChange={e => setDay(e.target.value)}
                        className={"select select-primary w-full max-w-xs"}>
                    {
                        documents?.map(day => (
                            <option key={day} value={day}>{day.toUpperCase()}</option>
                        ))
                    }
                </select>
            </div>
            <TimeTableCard day={infoProps}/>
        </div>
    );
}

export default Timetable;
