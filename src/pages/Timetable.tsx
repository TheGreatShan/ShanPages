import React, {useEffect, useState} from 'react';
import db from "../lib/FirebaseConfig";
import {Subject} from "../types/Custom/SubjectType";
import TimeTableCard from "../components/TimeTableCard";
import {doc, getDoc} from "firebase/firestore"
import {getDocumentNames, getTimeTable} from "../lib/api";

function Timetable() {

    document.title = "Timetable - Muras"
/*    useEffect(() => {
      const lal =  async () => {
            await getDocumentNames("timetable")
        }
        lal()
    }, []) */
    return (
        <div>
            <TimeTableCard day={"thursday"}/>
        </div>
    );
}

export default Timetable;
