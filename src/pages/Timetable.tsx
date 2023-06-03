import React, {useEffect, useState} from 'react';
import db from "../lib/FirebaseConfig";
import {Subject} from "../types/Custom/SubjectType";
import TimeTableCard from "../components/TimeTableCard";
import {doc, getDoc} from "firebase/firestore"
import {getTimeTable} from "../lib/api";

function Timetable() {
    const [timeTable, setTimeTable] = useState<Subject[]>([]);

    return (
        <div>
            <TimeTableCard day={"thursday"}/>
        </div>
    );
}

export default Timetable;
