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

                <div className='row'>
                    <div className="col-12 display-1">

                    </div>
                    <div className="col-12 display-2">
                        <Slideshow></Slideshow>
                    </div>
                    <div className="col-12 display-3">
                        <Popular></Popular>
                    </div>
                    <div className="col-12 display-4">

                    </div>
                    <div className="col-12 display-5">

                    </div>
                    <div className="col-12 display-6">

                    </div>
                </div>
            </div>

        )
    }
}

export default Home 