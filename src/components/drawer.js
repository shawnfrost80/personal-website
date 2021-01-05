import React from "react"

import "../styles/drawer.css"
import DrawerElement from "./drawerElement"
import ProfilePic from "./profilePic"

class Drawer extends React.Component {
    constructor() {
        super()
        this.sendData = this.sendData.bind(this)
    }

    componentDidUpdate() {
        document.getElementById("drawer").classList.toggle("hidden")
    }

    sendData(data) {
        this.props.parentCallback(data)
    }

    render() {
        return (
            <div id="drawer" className="drawerContainer hidden">
                <div className="elementContainer">
                    <DrawerElement name="Home" callback={this.sendData}/>
                    <DrawerElement name="About Me" callback={this.sendData}/>
                    <DrawerElement name="Projects" callback={this.sendData}/>
                    <DrawerElement name="Contact Me" callback={this.sendData}/>
                </div>
                <div className="profileContainer">
                    <ProfilePic drawer={this.props.drawer}/>
                </div>
            </div>
        )
    }
}

export default Drawer