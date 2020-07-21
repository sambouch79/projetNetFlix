import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"
//import Carousel from 'react-bootstrap/Carousel'
import InfiniteCarousel from 'react-leaf-carousel'
//import 'bootstrap/dist/css/bootstrap.min.css';


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
        let topPopular = ordredMovie.slice(0, 9);
        for (let i of topPopular) {
            images.push(
                <div><img src={i.Imgband} alt=""></img></div>
            )

            // images.push(

            //     <Carousel.Item style={{ 'height': "300px" }} >
            //         <img src={i.Imgband} alt="" className='d-block w-60' />
            //     </Carousel.Item>

            // )

        }
        return images

    }


    render() {


        return (
            <div>
                <div className="container-fluid">
                    <h1 className="text-left">Popular</h1>
                    <div >
                        {/* <div>
                            <Carousel>

                                {this.renderImages()}


                            </Carousel>

                        </div> */}
                        <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                    },
                                },
                            ]}
                            dots={true}
                            showSides={true}
                            sidesOpacity={0.5}
                            sideSize={0.1}
                            slidesToScroll={1}
                            slidesToShow={4}
                            scrollOnDevice={true}
                        >

                            {this.renderImages()}


                        </InfiniteCarousel>


                    </div>

                </div>
            </div>




        );

    }
}