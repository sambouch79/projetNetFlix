import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"
import { Carousel } from 'react-bootstrap'


export default class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: dataservices.films

        }
    }

    renderImages = () => {
        let images = []
        let ordredMovie = this.state.films
        ordredMovie.sort((a, b) => b.Rating - a.Rating)
        console.log(ordredMovie)
        let topPopular = ordredMovie.slice(0, 3);
        for (let i of topPopular) {

            images.push(

                <Carousel.Item style={{ 'height': "300px" }} >
                    <img src={i.Imgband} alt="img" className='d-block w-60' />
                </Carousel.Item>

            )

        }
        return images

    }


    render() {


        return (
            <div>
                <div className="container-fluid">
                    <h1 className="text-left">Popular</h1>
                    <div className=" images-container">
                        <div>
                            <Carousel>

                                {this.renderImages()}


                            </Carousel>

                        </div>
                    </div>

                </div>
            </div>




        );

    }
}