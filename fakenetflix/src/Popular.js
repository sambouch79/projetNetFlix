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
        let i = 1;
        for (i of this.state.films) {
            console.log(i.Imgband)
            images.push(<img src={i.Imgband} alt="#" className='col' />)

        }

    }

    render() {

        return (

            <div className="container-fluid">
                <h1 className="text-left">Popular</h1>
                <div className="row flex">
                    <div className='row m-1'>
                        {this.renderImages()}
                    </div>
                </div>

            </div>





        );

    }
}