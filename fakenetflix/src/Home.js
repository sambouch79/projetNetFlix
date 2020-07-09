import React, { Component } from "react"
import {Upcoming} from "./upcoming/Upcoming"
import PopularTest from './PopularTest'
// import TopRatedTest from "./TopRatedTest"
import BandeauTest from "./BandeauTest"
import NowPlayingTest from "./NowPlayingTest"
import MaListeTest from "./MaListe"

import Popular from './Popular'
import Slideshow from './Slide'
import './slide.css'


class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="p-3 mb-2 bg-dark text-white">

                <div>
                    <Slideshow></Slideshow>
                </div>

                <h1 className="text-left">Up Coming </h1>
                
                    <Upcoming></Upcoming>
                
                <div className="row flex"></div>
                    <Popular></Popular>
                <div className='row'>
                  
                    <div className="col-12 display-2">
                        
                    </div>
                    <div className="col-12 display-3">
                        <PopularTest></PopularTest>
                    </div>
                    <div className="col-12 display-4">
                        {/* <TopRatedTest></TopRatedTest> */}
                    </div>
                    <div className="col-12 display-5">
                        <NowPlayingTest></NowPlayingTest>
                    </div>
                    <div className="col-12 display-6">
                        <MaListeTest></MaListeTest>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default Home 