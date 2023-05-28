import React, {useEffect, useState} from 'react';
import db from "../lib/FirebaseConfig";

function Timetable() {
    const [timeTable, setTimeTable] = useState<any>();
    useEffect(() => {
        const fetchTimeTable=async()=>{
            const response= db.collection('Blogs');
            const data=await response.get();
            data.docs.forEach(item=>{
                setTimeTable([...timeTable,item.data()])
            })
            console.log(timeTable)
        }
    }, [])
    return (
        <div>

        </div>
    );
}

export default Timetable;