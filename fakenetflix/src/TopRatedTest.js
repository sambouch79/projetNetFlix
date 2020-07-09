import React, { Component } from "react"
import {dataservices} from "./service/dataservice"
import { Arrow } from "./Arrow"

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


    render(){
        return(
            <div className="h-25 overflow-hiden">
                <div className= "">
                    <h1>Top Rated</h1>
                </div>
                <div className="row">
                <ul className="row list-group-horizontal-sm  bg-dark text-white">
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                        <li className="list-group-item"> <img src="https://picsum.photos/id/237/100/150" /></li>
                    <Arrow type='right' click={this.rightClick}/>
                </ul>
                </div>
            </div>
        )
    }
}       