import React from "react"
import firebase from "./Firestore"

class Fetcher {
    constructor() {
        this.db = firebase.firestore();
    }

    async fetchAboutMe() {
        let snapshot = await this.db.collection('aboutMe').get()
        let doc = snapshot.docs[0]
        return doc.data()
    }

    async fetchContact() {
        let snapshot = await this.db.collection('contact').get()
        let data = {
            github : "",
            linkedin : "",
            instagram : "",
            twitter : "",
            gmail : "" 
        }
        snapshot.forEach(doc => {
            data[doc.data().platform] = doc.data().link
        })
        return data
    }

    async fetchExperience() {
        let snapshot = await this.db.collection('experience').get()
        let data = []
        snapshot.forEach(doc => {
            data.push({
                company : doc.data().company,
                description : doc.data().description,
                duration : doc.data().duration,
                position : doc.data().position
            })
        })
        return data
    }

    async fetchProjects() {
        let snapshot = await this.db.collection('projects').get()
        let data = []
        snapshot.forEach(doc => {
            data.push({
                name : doc.data().name,
                description : doc.data().description,
                img : doc.data().img
            })
        })
        return data
    }
    
}

export default Fetcher