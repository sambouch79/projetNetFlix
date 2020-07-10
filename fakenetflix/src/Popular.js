import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"
import InfiniteCarousel from 'react-leaf-carousel';

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
            images.push(<img src={i.Imgband} alt="img" className='col images zoom' />)

        }
        return images

    }

    render() {

        return (

            <div className="container-fluid">
                <h1 className="text-left">Popular</h1>
                <div className="row  images-container">
                    <div className='row m-1   images'>
                        {this.renderImages()}
                    </div>
                </div>

            </div>





        );

    }
}