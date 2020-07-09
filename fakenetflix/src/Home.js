import React, { Component } from "react"

import PopularTest from './PopularTest'
import TopRated from "./TopRatedTest"
import BandeauTest from "./BandeauTest"
import UpcomingTest from "./UpComingTest"
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
                <div className="row flex">
                </div>
                <h1 className="text-left">Up Coming </h1>
                <div className="row flex">
                    <div className="col-2" > <img src="https://picsum.photos/id/237/200/300" /></div>
                    <div className="col-2"> <img src="https://picsum.photos/id/566/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/568/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/237/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/568/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/237/200/300" /> </div>
                </div>
                <div className="row flex"></div>
                    <Popular></Popular>
                <div className='row'>
                  
                    <div className="col-12 display-2">
                        <UpcomingTest></UpcomingTest>
                    </div>
                    <div className="col-12 display-3">
                        <PopularTest></PopularTest>
                    </div>
                    <div className="col-12 display-4">
                        <TopRated></TopRated>
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