import {GithubUser} from "../types/Github/GithubUserType";
import {GithubRepository} from "../types/Github/GithubRepositoryType";
import {Subject} from "../types/Custom/SubjectType";
import {doc, getDoc} from "firebase/firestore";
import db from "./FirebaseConfig";

const githubLink: string = "https://api.github.com"
const githubUserLink: string = `${githubLink}/users`

export async function getGithubUser(username: string): Promise<GithubUser> {
    return await fetch(`${githubUserLink}/${username}`).then(resp => {
        return resp.json();
    }).catch(error => {
        return Promise.reject(error);
    });
}

export async function getGithubRepositories(username: string): Promise<GithubRepository[]> {
    return await fetch(`${githubUserLink}/${username}/repos`).then(resp => {
        return resp.json();
    }).catch(error => {
        return Promise.reject(error);
    });
}

export async function getTimeTable(day: string): Promise<Subject[]> {
    const docRef = doc(db, "timetable", day);
    const docSnap = await getDoc(docRef);
    let subjects: Subject[] = []

    docSnap.exists() ? docSnap.data()["school"].forEach((element: Subject) => {
        subjects.push({subject: element.subject, room: element.room, start: element.start, end: element.end})
    }) : Promise.reject("No data found")

    return subjects
}

export async function getDocumentNames(collection: string): Promise<string> {
    const docref = doc(db, collection)

    return docref.id
}