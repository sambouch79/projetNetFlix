import React, { Component } from "react"
import Logo from './Logo';

class Header extends Component {

    render() {
        return (
            <header className="container-fluid p-0">
                <nav class="navbar navbar-dark bg-dark">
                    <Logo></Logo>
                    <form class="form-inline">
                        <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success " type="submit"><i class="fa fa-search" aria-hidden="false"></i></button>
                    </form>
                </nav>

            </header >

        )
    }
}

export default Header