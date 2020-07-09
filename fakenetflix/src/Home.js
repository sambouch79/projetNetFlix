import React, { Component } from "react"
import TopRated from "./TopRated"



class Home extends Component {
    constructor(props) {
        super(props)
        
    }

    render(){
        return (
            <div className="p-3 mb-2 bg-dark text-white">
              
                 <div className='row'>  
                <div><h1 className="text-left">Bandeau Pub</h1></div>
                <div>  <img src="https://picsum.photos/id/237/1400/300"/>
                </div>
                    <div className="row flex">
                        <h1 className="text-left">Up Coming </h1>
                    </div>
                    <div></div>
                    <div className="row flex">                        
                        <div className="col-2" > <img src="https://picsum.photos/id/237/200/300"/></div>
                        <div className="col-2"> <img src="https://picsum.photos/id/566/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                    </div>
                    <div className="row flex">
                        <h1 className="text-left">Popular</h1>
                    </div>
                    <div className="row flex">
                    <div className="col-2" >  <img src="https://picsum.photos/id/237/200/300"/></div>
                        <div className="col-2"> <img src="https://picsum.photos/id/566/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                    </div>
                    <div className="row">
                        <TopRated></TopRated>
                    </div>
                    <div className="row">
                        <h1 className="text-left">Now playing</h1>
                    </div>
                    <div className="row">
                    <div className="col-2" >  <img src="https://picsum.photos/id/237/200/300"/></div>
                        <div className="col-2"> <img src="https://picsum.photos/id/566/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home 