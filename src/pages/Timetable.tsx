import React, {useEffect, useState} from "react";
import db from "../lib/FirebaseConfig";
import {Subject} from "../types/Custom/SubjectType";
import TimeTableCard from "../components/TimeTableCard";
import {doc, getDoc} from "firebase/firestore";
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
            <select onChange={e => setDay(e.target.value)}>
                {
                    documents?.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))
                }
            </select>
            <TimeTableCard day={infoProps}/>
        </div>
    );
}

export default Timetable;
