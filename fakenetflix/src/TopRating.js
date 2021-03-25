import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"
import InfiniteCarousel from 'react-leaf-carousel'
import { Link } from 'react-router-dom'

export default class NowPlaying extends Component {
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
        let topRating = ordredMovie.slice(0, 9);
        for (let i of topRating) {
            images.push(
                <Link to={`/MovieDetail/${i.id}`}> <div className="effect"><img src={i.Imgband} alt=""></img></div></Link>
            )

        }
        return images

    }


    render() {


        return (
            <div>
                <div className="container-fluid">
                    <h1 className="text-left">Top Rating</h1>
                    <div >

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