import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"

export default class NowPlayingTest extends Component {
    constructor(props) {
        super(props)
           
    }

    render () {
        return (
            <div>
                <div>
                    <h1>NowPlaying</h1>
                </div>
                <div>
                    Contenu NowPlaying
                </div>
            </div>
        )
    }

}
