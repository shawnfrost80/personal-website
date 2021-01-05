import React from "react"

import ExperienceCard from "../components/experienceCard"
import Fetcher from "../Fetcher"
import "../styles/aboutMe.css"

class AboutMe extends React.Component {
    constructor() {
        super()
        this.state = {
            pic : "",
            bio : "",
            experience : [
                {
                    company : "",
                    description : "",
                    duration : "",
                    position : ""
                }
            ],
            isLoading : true
        }
    }

    componentDidUpdate() {
        document.getElementById("para1").classList.toggle("blur")
    }

    componentDidMount() {
        let fetcher = new Fetcher()
        let pic, bio
        fetcher.fetchAboutMe().then(data => {
            pic = data.pic
            bio = data.bio
        })
        fetcher.fetchExperience().then(data => {
            this.setState({
                experience : data,
                isLoading : false,
                pic : pic,
                bio : bio
            })
        })
    }

    render() {
        return(
            this.state.isLoading ? 
                <div className="loader"></div> : 
                <div className="aboutMeContainer">
                    <h1 className="head">About <span className="name">Me</span></h1>
                    
                    <div className="bioContainer">
                        <img className="myPic" src={this.state.pic} />
                        <div>
                            <h2>BIO</h2>
                            <p id="para1" className="bioPara blur">{this.state.bio}</p>
                        </div>
                    </div>

                    <hr></hr>

                    <h2>EXPERIENCE</h2>

                    <div style={{display: "flex"}}>
                        {this.state.experience.map((data, index) => 
                            // console.log(this.state)
                            <ExperienceCard 
                                key={index}
                                drawer={this.props.drawer}
                                company={data.company}
                                description={data.description}
                                duration={data.duration}
                                position={data.position}/>
                        )}
                    </div>
                </div>
        )
    }
}

export default AboutMe