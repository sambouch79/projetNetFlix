import React, { Component } from "react"

class Images extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.uri.map((image) => {
                    return (<img src={image} />)
                })}
            </div>
        )
    }
}
export default Image