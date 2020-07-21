import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"
import InfiniteCarousel from 'react-leaf-carousel'


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
        ordredMovie.sort((a, b) => b.Runtime - a.Runtime)
        console.log(ordredMovie)
        let nowPlaying = ordredMovie.slice(0, 9);
        for (let i of nowPlaying) {
            images.push(
                <div><img src={i.Imgband} alt=""></img></div>
            )

        }
        return images

    }


    render() {


        return (
            <div>
                <div className="container-fluid">
                    <h1 className="text-left">Now Playing</h1>
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