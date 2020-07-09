import React, { Component } from "react"
import netflix1 from './netflix1.png';

class Footer extends Component {

    render() {
        return (
            <footer className="container-fluid bg-dark ">
                <nav className="navbar navbar-dark bg-darg">
                    <a className="navbar-brand" href="#"><img src={netflix1} className="logo"></img></a>
                    <div className="text-white "> ©2020. All Rights Reserved by .</div>

                </nav>
            </footer >
        )
    }
}

export default Footer