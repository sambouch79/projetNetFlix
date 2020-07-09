import React, { Component } from "react"
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

                <div className="row flex">
                    <Popular></Popular>
                </div>


                <div className="row">
                    <h1 className="text-left">Top Rated</h1>
                </div>
                <div className="row">
                    <div className="col-2" >  <img src="https://picsum.photos/id/237/200/300" /></div>
                    <div className="col-2"> <img src="https://picsum.photos/id/566/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/568/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/237/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/568/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/237/200/300" /> </div>
                </div>
                <div className="row">
                    <h1 className="text-left">Now playing</h1>
                </div>
                <div className="row">
                    <div className="col-2" >  <img src="https://picsum.photos/id/237/200/300" /></div>
                    <div className="col-2"> <img src="https://picsum.photos/id/566/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/568/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/237/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/568/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/237/200/300" /> </div>
                </div>
            </div >

        )
    }
}

export default Home 