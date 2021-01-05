import React from "react"

import "../styles/projectCard.css"

class ProjectCard extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="projectCard">
                <p className="projectHeading">{this.props.name}</p>
                <img className="projectImage" src={this.props.img} />
                <p className="projectSubHeading">{this.props.description}</p>
            </div>
        )
    }
}

export default ProjectCard