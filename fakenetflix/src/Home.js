import React, { Component } from "react"
import Upcoming from "./upcoming/Upcoming"
import PopularTest from './PopularTest'
import TopRated from "./TopRating"
import BandeauTest from "./BandeauTest"
import NowPlayingTest from "./NowPlayingTest"
import NowPlaying from './NowPlaying'
import MaListeTest from "./MaListe"
import Popular from './Popular'
import Slideshow from './Slide'
import './slide.css'
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