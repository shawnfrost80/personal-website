import React from "react"

import "../styles/drawerElement.css"

class DrawerElement extends React.Component {
    constructor() {
        super()
        this.sendData = this.sendData.bind(this)
    }

    sendData() {
        this.props.callback(this.props.name)
    }

    render() {
        return (
            <div id="element" className="elements" onClick={this.sendData}>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default DrawerElement