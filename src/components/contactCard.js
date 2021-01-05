import React from "react"

import "../styles/contactCard.css"

class ContactCard extends React.Component {
    constructor() {
        super()
    }

    openInNewTab(url, platform) {
        if(platform == "gmail") {
            window.open("mailto:"+url, "_blank")
        } else {
            window.open(url, '_blank');
        }
        // win.focus();
    }

    render() {
        return(
            <div className="contactContentContainer" onClick={() => this.openInNewTab(this.props.link, this.props.platform)}>
                <p><strong style={{color: "rgb(39, 172, 167)", textShadow: "0.5px 0.5px 1px black", fontSize:"22px", textTransform: "uppercase"}}>{this.props.platform}:</strong>
                </p>
                <p style={{fontSize: "22px", padding: "0 0 0 0"}}>{this.props.link}</p>
            </div>
        )
    }
}

export default ContactCard