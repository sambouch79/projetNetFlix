import React, { Component } from "react"
import { LeftArrow } from './LeftArrow'
import { RightArrow } from './RightArrow'
// import {withRouter} from "react-router-dom"
import './upcoming.css'


export default class Upcoming extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div className='container-fluid bg-dark bandeauG d-flex align-items-center'>
                <div className='flex-row bandeauB'>
                    <LeftArrow></LeftArrow>
                    <img className='band' src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" />
                    <img className='band' src="http://image.tmdb.org/t/p/w500///s3TBrRGB1iav7gFOCNx3H31MoES.jpg" />
                    <img className='band' src="http://image.tmdb.org/t/p/w500///eIi3klFf7mp3oL5EEF4mLIDs26r.jpg" />
                    <img className='band' src="http://image.tmdb.org/t/p/w500///72r4uAQGsa8KEv0DB2TpSu31lEB.jpg" />
                    <img className='band' src="http://image.tmdb.org/t/p/w500///cjAirCV9TyTQcp7mFNRnvgkoVFV.jpg" />
                    <img className='band' src="http://image.tmdb.org/t/p/w500///naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg" />
                    <img className='band' src="http://image.tmdb.org/t/p/w500///fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg" />
                    <RightArrow></RightArrow>
                </div>
            </div>

        )
    }
}

// export default withRouter(Upcoming)