import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"

export default class Populair extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: dataservices.films.Imgband
        }
    }

    render() {
        console.log(this.state.films.Imgband)
        return (

            <div className="container">
                <div className="row">
                    {this.state.films.map((element) => {
                        return (
                            <img src={element} alt=""></img>
                        )
                    })}
                </div>
            </div >



        );

    }
}