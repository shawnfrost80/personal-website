import React from 'react'
import firebase from "../Firestore"

import '../styles/profilePic.css'
import Fetcher from "../Fetcher"


class ProfilePic extends React.Component {
    constructor() {
        super()
        this.state = {
            pic : ""
        }
    }

    async componentDidMount() {
        let fetcher = new Fetcher()
        document.getElementById("pic").classList.toggle("maximize")
        fetcher.fetchAboutMe().then((data) => {
            this.setState({
                pic : data.pic
            })
        })
    }

    componentDidUpdate() {
        document.getElementById("pic").classList.toggle("maximize")
    }

    render() {
        return (
            <img id="pic" src={this.state.pic} className="profilePic"/>
        )
    }
}

export default ProfilePic