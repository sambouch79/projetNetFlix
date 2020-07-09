import React, { Component } from "react"
import netflix1 from './netflix1.png';

class Header extends Component {

    render() {
        return (
            <header className="container-fluid p-0">
                <nav class="navbar navbar-dark ">
                    <img src={netflix1} className="logo"></img>
                    <form class="form-inline">
                        <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success " type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </nav>

            </header >

        )
    }
}

export default Header