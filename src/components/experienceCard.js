import React from "react"

import "../styles/experienceCard.css"

class ExperienceCard extends React.Component {
    constructor() {
        super()
    }

    componentDidUpdate() {
        document.getElementById("card1").classList.toggle("blur")
    }

    render() {
        console.log(this.props)
        return (
            <div id="card1" className="card">
                <p className="cardHeading">{this.props.company}</p>
                <p className="cardSubHeading">{this.props.position} | {this.props.duration}</p>
                <p className="content">
                    {this.props.description}
                </p>
            </div>
        )
    }
}

export default ExperienceCard