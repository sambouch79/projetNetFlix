import React, { Component } from "react"

export class LeftArrow extends Component {

    constructor(props) {
        super(props)
    }
    arrowClick = () => {
        this.props.click()
    }
    render() {
        return(
            <div onClick={this.arrowClick} className="btn arrow">
                <i  ClassName='fa fa-chevron-left arrow' aria-hidden="true"></i>
            </div>
        )
    }
}