import React, { Component } from "react"


class Home extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="p-3 mb-2 bg-dark text-white">
                <header>
                    Samira
                </header>

                <div>  
                <div><h1>Bandeau Pub</h1>
                </div>
                    <div className="container row flex">
                        <h1>Up Coming </h1>
                    </div>
                    <div className="row">                        
                        <div className="col-2" >  <img src="https://picsum.photos/id/237/200/300"/></div>
                        <div className="col-2"> <img src="https://picsum.photos/id/566/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                    </div>
                    <div className="row">
                        <h1>Popular</h1>
                    </div>
                    <div className="row">
                    <div className="col-2" >  <img src="https://picsum.photos/id/237/200/300"/></div>
                        <div className="col-2"> <img src="https://picsum.photos/id/566/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                    </div>
                    <div className="row">
                        <h1>Top Rated</h1>
                    </div>
                    <div className="row">
                    <div className="col-2" >  <img src="https://picsum.photos/id/237/200/300"/></div>
                        <div className="col-2"> <img src="https://picsum.photos/id/566/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                        <div className="col-2"> <img src="https://picsum.photos/id/568/200/300"/> </div> 
                        <div className="col-2"> <img src="https://picsum.photos/id/237/200/300"/> </div>
                    </div>
                    <div className="row">
                        <h1>Now playing</h1>
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
                <footer></footer>
                </div>
        )
    }
}

export default Home 