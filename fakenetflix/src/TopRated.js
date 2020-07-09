import React, { Component } from "react"
import {dataservices} from "./service/dataservice"

export default class TopRated extends Component {
    constructor(props) {
        super(props)
        this.state ={
            films : dataservices
        }
        
    }

    renderFI = () => {
        let images = []
        for (let i of this.state.films.Imgband) {
        }
        return images
    }

    render(){
        return(
            <div>
                <h1>Top Rated</h1>
                <div className="list-container">
                    <span class="left-controls" role="button"></span>
                        <div class="module-section clearfix">
                            <ul id="content">
                                <div class="listRow">
                                    <a class="tile" href="id:3">7
                                        <div class="tile-img">
                                            <img class="tile-img" alt="img" src="Imgband"></img>
                                        </div>
                                        <div class=" photo-overlay">
                                            <div class="tile-text-container">
                                                <div class="playbtn-container">
                                                    <button class="playBtn ">▶</button>
                                                </div>
                                                <div><h5 class="search-tile-title">Gabriel's Inferno</h5></div>
                                                <div><p class="tile-desc">An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passio ... read more</p></div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="tile" href="#/movie/696374">7
                                        <div class="tile-img">
                                            <img class="tile-img" alt="img" src="http://image.tmdb.org/t/p/w500///w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg"></img>
                                        </div>
                                        <div class=" photo-overlay">
                                            <div class="tile-text-container">
                                                <div class="playbtn-container">
                                                    <button class="playBtn ">▶</button>
                                                </div>
                                                <div><h5 class="search-tile-title">Gabriel's Inferno</h5></div>
                                                <div><p class="tile-desc">An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passio ... read more</p></div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="tile" href="#/movie/696374">7
                                        <div class="tile-img">
                                            <img class="tile-img" alt="img" src="http://image.tmdb.org/t/p/w500///w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg"></img>
                                        </div>
                                        <div class=" photo-overlay">
                                            <div class="tile-text-container">
                                                <div class="playbtn-container">
                                                    <button class="playBtn ">▶</button>
                                                </div>
                                                <div><h5 class="search-tile-title">Gabriel's Inferno</h5></div>
                                                <div><p class="tile-desc">An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passio ... read more</p></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    <span class="right-controls" role="button"></span>
                </div>
            </div>
        )
    }
}