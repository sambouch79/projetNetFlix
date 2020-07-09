import React, { Component } from "react"
import Logo from './Logo'

class Footer extends Component {

    render() {
        return (
            <footer className="container-fluid bg-dark ">
                <nav className="navbar navbar-dark bg-darg">
                    <a className="navbar-brand" href="#"><Logo></Logo></a>
                    <div > ©2020. All Rights Reserved by .</div>

                </nav>
            </footer >
        )
    }
}

export default Footer