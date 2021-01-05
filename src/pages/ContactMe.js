import React from "react"

import "../styles/contactMe.css"
import ContactCard from "../components/contactCard"
import Fetcher from "../Fetcher"

class ContactMe extends React.Component {
    constructor() {
        super()
        this.state = {
            data : {
                github : "",
                linkedin : "",
                instagram : "",
                twitter : "",
                gmail : "" ,
            },
            isLoading : true
        }
    }

    componentDidMount() {
        let fetcher = new Fetcher()
        fetcher.fetchContact().then(data => {
            this.setState({
                data : {
                    github : data.github,
                    linkedin : data.linkedin,
                    instagram : data.instagram,
                    twitter : data.twitter,
                    gmail : data.gmail,
                },
                isLoading : false
            })
        })
    }

    render() {
        return(
            this.state.isLoading ? 
                <div className="loader"></div> : 
                <div className="contactMeContainer">
                    <h1 className="head">Contact <span className="name">Me</span></h1>
                    <p className="contactSubheading">Enough about me. Let's catch up.</p>
                    <div style={{margin: "50px 50px 50px 50px", display: "flex", flexWrap: "wrap"}}>
                        {Object.entries(this.state.data).map(([key, value]) => {
                            return <ContactCard platform={key} link={value} />
                        })}
                    </div>
                </div>
            
        )
    }
}

export default ContactMe