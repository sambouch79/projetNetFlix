import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"

export default class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (

            <div className="container">
                <h1 className="text-left">Popular</h1>
                <div className="row flex">
                    <div className="col-2" > <img src="https://picsum.photos/id/237/200/300" /></div>
                    <div className="col-2"> <img src="https://picsum.photos/id/566/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/568/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/237/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/568/200/300" /> </div>
                    <div className="col-2"> <img src="https://picsum.photos/id/237/200/300" /> </div>
                </div>
            </div>




        );

    }
}