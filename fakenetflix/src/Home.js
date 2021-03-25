import React, { Component } from "react"
import Upcoming from "./Upcoming"
import TopRated from "./TopRating"
import NowPlaying from './NowPlaying'
import Popular from './Popular'
import Slideshow from './slide/Slide'

import './index.css'


class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className=" mb-2 bg-dark text-white">

                <div className='row'>
                    <div className="col-12  display-1">

                    </div>
                    <div className="col-12  p-0 m-0 display-2">
                        <Slideshow></Slideshow>
                    </div>
                    <div className="col-12 display-3">
                        <Upcoming></Upcoming>
                    </div>
                    <div className="col-12 display-4">
                        <TopRated></TopRated>
                    </div>
                    <div className="col-12 display-5">
                        <Popular></Popular>
                    </div>
                    <div className="col-12 display-6">
                        <NowPlaying></NowPlaying>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home 