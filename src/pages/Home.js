import React from "react"
import firebase from "../Firestore"

import Icon from "../components/icon"
import Fetcher from "../Fetcher"
import "../styles/home.css"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name : "",
            intro : "",
            isLoading : true
        }
    }

    componentDidMount() {
        let fetcher = new Fetcher()
        fetcher.fetchAboutMe().then(data => {
            this.setState({
                name: data.name,
                intro: data.intro,
                isLoading : false
            })
        })
    }

    render() {
        return (
            this.state.isLoading ? 
                <div className="loader"></div> : 
                <div className="homeComponent">
                    <h1 className="head">Hi, I'm <span className="name">Ahad</span></h1>
                    <p className="intro">{this.state.intro}</p>
                    <Icon />
                </div>
        )
    }
}

export default Home