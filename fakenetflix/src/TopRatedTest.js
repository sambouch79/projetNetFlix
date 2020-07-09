import React, { Component } from "react"
import {dataservices} from "./service/dataservice"
import {Arrow} from "./Arrow"
import './TopRating.css'

export default class TopRatedTest extends Component {
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


    render(){
        return(
            <div className="overflow-hiden">
                <div className= "">
                    <h1>Top Rated</h1>
                </div>
                <div className="row">
                    <ul className=" row list-group-horizontal-sm  bg-dark text-white">
                        <Arrow type='left' click={this.leftClick}/>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li className="list-group-item"> <img src="http://image.tmdb.org/t/p/w500///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                        <Arrow type='right' click={this.rightClick}/>
                    </ul>
                </div>
            </div>
        )
    }
}       