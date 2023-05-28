import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

type Subject = {
    subject: string;
    room: number;
    start: Timestamp;
    end: Timestamp;
}

export type {Subject}