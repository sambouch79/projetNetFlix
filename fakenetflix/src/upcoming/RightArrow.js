import React, { Component } from "react"

export class RightArrow extends Component {

    constructor(props) {
        super(props)
    }
    arrowClick = () => {
        this.props.click()
    }
    render() {
        return(
            <div onClick={this.arrowClick} className="arrow btn">
                <i  ClassName='fa fa-chevron-right arrow' aria-hidden="true"></i>
            </div>
        )
    }
}