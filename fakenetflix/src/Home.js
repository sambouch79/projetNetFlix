import React, { Component } from "react"
import Popular from './PopularTest'
import TopRated from "./TopRatedTest"
import Bandeau from "./BandeauTest"
import Upcoming from "./UpComingTest"
import NowPlaying from "./NowPlayingTest"


class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="p-3 mb-2 bg-dark text-white">

                <div className='row'>
                    <div className="col-12 display-1">
                        <Bandeau></Bandeau>
                    </div>
                    <div className="col-12 display-2">
                        <Upcoming></Upcoming>
                    </div>
                    <div className="col-12 display-3">
                        <Popular></Popular>
                    </div>
                    <div className="col-12 display-4">
                        <TopRated></TopRated>
                    </div>
                    <div className="col-12 display-5">
                        <NowPlaying></NowPlaying>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default Home 