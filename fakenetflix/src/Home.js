import React, { Component } from "react"
import PopularTest from './PopularTest'
import TopRated from "./TopRatedTest"
import BandeauTest from "./BandeauTest"
import UpcomingTest from "./UpComingTest"
import NowPlayingTest from "./NowPlayingTest"
import MaListeTest from "./MaListe"


class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="p-3 mb-2 bg-dark text-white">

                <div className='row'>
                    <div className="col-12 display-1">
                        <BandeauTest></BandeauTest>
                    </div>
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