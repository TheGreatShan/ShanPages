import React, {useEffect, useState} from 'react';
import {collection, query, getDocs} from "firebase/firestore";
import db from "../lib/FirebaseConfig";
import {Subject} from "../types/Custom/SubjectType";
import TimeTableCard from "../components/TimeTableCard";

function Timetable() {
    const [timeTable, setTimeTable] = useState<Subject[]>([]);
    useEffect(() => {
        const fetchTimeTable = async () => {
            const response = db.collection("/timetable/days/thursday/");
            response.forEach(item => {
                let data = item.data()
                setTimeTable([...timeTable, {
                    end: data["end"],
                    start: data["start"],
                    subject: data["subject"],
                    room: data["room"]
                }])
            })
        }
        fetchTimeTable()
    }, [])
    return (
        <div>
            <TimeTableCard subjects={timeTable}/>
        </div>
    );
}

export default Timetable;