import React, { Component } from "react"
<<<<<<< HEAD
import Popular from './Popular'
import Slideshow from './Slide'
import './slide.css'
=======
import Popular from './PopularTest'
import TopRated from "./TopRatedTest"
import Bandeau from "./BandeauTest"
import Upcoming from "./UpComingTest"
import NowPlaying from "./NowPlayingTest"
import MaListe from "./MaListe"
>>>>>>> 828f2340ef9132886fd4db7eae90d4d987bc44c9


class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="p-3 mb-2 bg-dark text-white">

<<<<<<< HEAD
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

                <div className="row flex">
                    <Popular></Popular>
=======
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
                    <div className="col-12 display-6">
                        <MaListe></MaListe>
                    </div>
>>>>>>> 828f2340ef9132886fd4db7eae90d4d987bc44c9
                </div>
            </div>
        
        )
    }
}

export default Home 