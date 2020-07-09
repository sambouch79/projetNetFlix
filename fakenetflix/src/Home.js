import React, { Component } from "react"
import Upcoming from "./upcoming/Upcoming"
import PopularTest from './PopularTest'
import TopRatedTest from "./TopRatedTest"
import BandeauTest from "./BandeauTest"
import NowPlayingTest from "./NowPlayingTest"
import MaListeTest from "./MaListe"
import Popular from './Popular'
import Slideshow from './Slide'
import './slide.css'
import './popular.css'

class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="p-3 mb-2 bg-dark text-white">

                <div className='row'>
                    <div className="col-12 display-1">

                    </div>
                    <div className="col-12 display-2">
                        <Slideshow></Slideshow>
                    </div>
                    <div className="col-12 display-3">
                        <Upcoming></Upcoming>
                    </div>
                    <div className="col-12 display-4">
                        <TopRatedTest></TopRatedTest>
                    </div>
                    <div className="col-12 display-5">
                        <Popular></Popular>
                    </div>
                    <div className="col-12 display-6">

                    </div>
                </div>
            </div>

        )
    }
}

export default Home 