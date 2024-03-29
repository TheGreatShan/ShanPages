import { GithubUser } from "../types/Github/GithubUserType";
import { GithubRepository } from "../types/Github/GithubRepositoryType";
import { Subject } from "../types/Custom/SubjectType";
import { doc, getDocs, getDoc, collection, DocumentData } from "@firebase/firestore";
import db from "./FirebaseConfig";
import { Progress } from "../types/Custom/ProgressType";

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
    subjects.push({ subject: element.subject, room: element.room, start: element.start, end: element.end })
  }) : Promise.reject("No data found")

  return subjects
}

export async function getProgress(): Promise<Progress[]> {
  const docRef = doc(db, "progress", "progress");
  const docSnap = await getDoc(docRef);
  let progress: Progress[] = []

  docSnap.exists() ? docSnap.data()["progress"].forEach((element: Progress) => {
    progress.push({ skill: element.skill, value: element.value, picture: element.picture, link: element.link })
  }) : Promise.reject("No data found")

  return progress
}

export async function getDocumentNames(collectionName: string): Promise<string[]> {
  const querySnapshot = await getDocs(collection(db, collectionName));

  let subjects: string[] = []
  querySnapshot.forEach((element: DocumentData) => {
    subjects.push(element.id)
  })
  return subjects
}
