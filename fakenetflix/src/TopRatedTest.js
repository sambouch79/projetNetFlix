import React, { Component } from "react"
import {dataservices} from "./service/dataservice"

export default class TopRated extends Component {
    constructor(props) {
        super(props)
        this.state ={
                  }
        
    }

    render(){
        return(
            <div>
                <div className= "display-1">
                    <h1>Top Rated</h1>
                </div>
                <div className="list-container display-2">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="http://image.tmdb.org/t/p/w500///s3TBrRGB1iav7gFOCNx3H31MoES.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="http://image.tmdb.org/t/p/w500///naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="http://image.tmdb.org/t/p/w500///cjAirCV9TyTQcp7mFNRnvgkoVFV.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>    
                </div>
            </div>
        )
    }
}       