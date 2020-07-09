import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"

export class NowPlaying extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: dataservices.films.imgband
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.films.map((element) => {
                        return (
                            <img src={element}></img>
                        )
                    })}
                </div>
            </div>


        );

    }
}