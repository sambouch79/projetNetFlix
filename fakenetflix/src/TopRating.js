import React, { Component } from "react"
import {dataservices} from "./service/dataservice"
import {Arrow} from "./Arrow"
import './TopRating.css'

export default class TopRated extends Component {
    constructor(props) {
        super(props)
        this.state ={
            dataservices : []
                }
        
    }

    leftClick = () => {
        let tmpIndex = this.state.indexActivation - 1
        if (this.state.indexActivation == 0) {
            tmpIndex = this.state.slides.length - 1
        }
        this.setState({
            indexActivation: tmpIndex
        })
    }

    rightClick = () => {
        let tmpIndex = this.state.indexActivation + 1
        if (this.state.indexActivation == this.state.slides.length - 1) {
            tmpIndex = 0
        }
        this.setState({
            indexActivation: tmpIndex
        })
    }

    render() {
        return(
            <div className='container-fluid bg-dark bandeauG d-flex align-items-center'>
                <div className="overflow-hiden">
                    <div className= "">
                        <h1>Top Rated</h1>
                    </div>
                    <div className='flex-row bandeauB'>
                        <Arrow type='left' click={this.leftClick}/>
                            <img className='band' src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg"/>
                            <img className='band' src="http://image.tmdb.org/t/p/w500///s3TBrRGB1iav7gFOCNx3H31MoES.jpg"/>
                            <img className='band'src="http://image.tmdb.org/t/p/w500///eIi3klFf7mp3oL5EEF4mLIDs26r.jpg"/>
                            <img className='band'src="http://image.tmdb.org/t/p/w500///72r4uAQGsa8KEv0DB2TpSu31lEB.jpg"/>
                            <img className='band'src="http://image.tmdb.org/t/p/w500///cjAirCV9TyTQcp7mFNRnvgkoVFV.jpg"/>
                            <img className='band'src="http://image.tmdb.org/t/p/w500///naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg"/>
                            <img className='band'src="http://image.tmdb.org/t/p/w500///fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg"/>
                        <Arrow type='right' click={this.rightClick}/>
                    </div>
                </div>
            </div>
        )
    }
    }