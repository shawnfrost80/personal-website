import React from "react"

import "../styles/projects.css"
import ProjectCard from "../components/projectCard"
import Fetcher from "../Fetcher"

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            projects : [],
            isLoading : true
        }
    }

    componentDidMount() {
        let fetcher = new Fetcher()
        fetcher.fetchProjects().then(data => {
            this.setState({
                projects : data,
                isLoading : false
            })
        })
    }

    render() {
        return(
            this.state.isLoading ? 
                <div className="loader"></div> : 
                <div className="projectsContainer">
                    <h1 className="head"><span className="name">My</span> Projects</h1>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {this.state.projects.map((data, index) => {
                            return <ProjectCard 
                                key={index}
                                name={data.name} 
                                description={data.description} 
                                img={data.img} />
                        })}
                    </div>
                </div>
            
        ) 
    }
}

export default Projects