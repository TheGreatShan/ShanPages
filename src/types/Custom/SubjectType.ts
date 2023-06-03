import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

type Subject = {
    subject: string;
    room: string;
    start: {
        seconds: number;
        nanoseconds: number;
    };
    end: {
        seconds: number;
        nanoseconds: number;
    };
}

export type {Subject}