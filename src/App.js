import React from "react"
import BackdropFilter from "react-backdrop-filter"

import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import ContactMe from "./pages/ContactMe"
import Drawer from "./components/drawer"
import "./style.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            drawer : false,
            component : "Home"
        }

        this.onMenuClick = this.onMenuClick.bind(this)
        this.callbackFuntion = this.callbackFuntion.bind(this)
    }

    onMenuClick() {
        window.scrollTo(0, 0)
        document.getElementById("menuIcon").classList.toggle("change")
        document.getElementById("glassLayer").classList.toggle("visible")
        this.setState(function(prevState) {
            return {
                drawer : !prevState.drawer
            }
        })
    }

    callbackFuntion(data) {
        document.getElementById("menuIcon").classList.toggle("change")
        document.getElementById("glassLayer").classList.toggle("visible")
        this.setState(function(prevState) {
            return {
                drawer : false,
                component: data
            }
        })
    }

    renderComponent(component) {
        switch(component) {
            case "Home" :
                return <Home />;
            case "About Me":
                return <AboutMe drawer={this.state.drawer}/>;
            case "Projects" :
                return <Projects />;
            case "Contact Me" :
                return <ContactMe />;
        }
    }

    render() {
        return (
            <div className="mainPage">
                <div className="tintedLayer"></div>
                <div id="menuIcon" class="drawerIcon" onClick={this.onMenuClick}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                {this.renderComponent(this.state.component)}
                <div id="glassLayer" className="layer"></div>
                <Drawer drawer={this.state.drawer} parentCallback={this.callbackFuntion}/>
            </div>
        )
    }
}

export default App