import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"

export default class Popular extends Component {
    constructor(props) {
        super(props)

    }

    render () {
        return (
            <div>
                <div>
                    <h1>Popular</h1>
                </div>
                <div>
                    Contenu Popular
                </div>
            </div>
        )
    }

}