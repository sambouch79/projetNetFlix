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
                <div className= "">
                    <h1>Top Rated</h1>
                </div>
                <div className="">
                     <img src="http://image.tmdb.org/t/p/w500///s3TBrRGB1iav7gFOCNx3H31MoES.jpg" className="col-2 img-fluid img-thumbnail" alt="Responsive image"></img>
                     <img src="http://image.tmdb.org/t/p/w500///s3TBrRGB1iav7gFOCNx3H31MoES.jpg" className="col-2 img-fluid img-thumbnail" alt="Responsive image"></img>
                     <img src="http://image.tmdb.org/t/p/w500///s3TBrRGB1iav7gFOCNx3H31MoES.jpg" className="col-2 img-fluid img-thumbnail" alt="Responsive image"></img>
                     <img src="http://image.tmdb.org/t/p/w500///s3TBrRGB1iav7gFOCNx3H31MoES.jpg" className="col-2 img-fluid img-thumbnail" alt="Responsive image"></img>
                     <img src="http://image.tmdb.org/t/p/w500///s3TBrRGB1iav7gFOCNx3H31MoES.jpg" className="col-2 img-fluid img-thumbnail" alt="Responsive image"></img>
                     <img src="http://image.tmdb.org/t/p/w500///s3TBrRGB1iav7gFOCNx3H31MoES.jpg" className="col-2 img-fluid img-thumbnail" alt="Responsive image"></img>
                </div>
            </div>
        )
    }
}       