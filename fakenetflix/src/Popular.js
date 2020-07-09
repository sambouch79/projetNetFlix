import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"

export default class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: dataservices.films

        }
    }
    renderImages = () => {
        let images = []
        for (let i of this.state.films) {
            console.log(i.Imgband)
            images.push(<img src={i.Imgband} />)

        }

    }

    render() {

        return (

            <div className="container">
                <h1 className="text-left">Popular</h1>
                <div className="row flex">

                    <div className="row m-1">
                        <h1 className="col">{this.state.films.title}</h1>
                    </div>
                    <div className='row m-1'>
                        {this.renderImages()}
                    </div>
                    <div className='row m-1'>
                        <div className='col'>
                            {this.state.films.Overview}
                        </div>
                    </div>

                </div>
            </div>




        );

    }
}