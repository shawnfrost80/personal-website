import React from "react"
import { ReactSVG } from "react-svg"

import "../styles/icon.css"
import email from "../assets/icon/email.svg"
import github from "../assets/icon/github.svg"
import instagram from "../assets/icon/instagram.svg"
import linkedin from "../assets/icon/linkedin.svg"
import twitter from "../assets/icon/twitter.svg"
import Fetcher from "../Fetcher"


class Icon extends React.Component {
    constructor() {
        super()
        this.state = {
            github : "",
            linkedin : "",
            instagram : "",
            twitter : "",
            gmail : "" 
        }
    }

    componentDidMount() {
        let fetcher = new Fetcher()
        fetcher.fetchContact().then(data => {
            this.setState(data)
        })
    }


    render() {
        return (
            <div className="row">
                <a href={this.state.github} target="_blank" className="logo">
                    <ReactSVG src={github} />
                </a>
                <a href={this.state.linkedin} target="_blank" className="logo">
                    <ReactSVG src={linkedin} />
                </a>
                <a href={this.state.instagram} target="_blank" className="logo">
                    <ReactSVG src={instagram} />
                </a>
                <a href={this.state.twitter} target="_blank" className="logo">
                    <ReactSVG src={twitter} />
                </a>
                <a href="mailto:{this.state.gmail}" target="_blank" className="logo">
                    <ReactSVG src={email} />
                </a>
                
                
                
                
            </div>
        )
    }
}

export default Icon