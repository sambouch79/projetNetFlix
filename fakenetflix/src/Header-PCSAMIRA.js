import React, { Component } from "react"
import netflix1 from './images/netflix1.png';
import { dataservices } from "./service/dataservice"
import { Link } from 'react-router-dom'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            searchText: ""

        }
    }


    searchFieldChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }


    render() {

        return (
            <header className="container-fluid p-0 bg-dark">
                <nav className="navbar navbar-dark ">
                    <Link to="/"> <img src={netflix1} className="logo "></img></Link>
                    <form className="form-inline">
                        <input className="form-control bg-dark " type="search" placeholder="Search" aria-label="Search" value={this.state.searchText} onChange={this.searchFieldChange} />
                        <Link to={`/SearchResult/${this.state.searchText}`}><button className="btn btn-outline-secondry  " type="submit"  ><i className="fa fa-search" aria-hidden="true"></i></button></Link>
                        <Link to='/Auth'><i class="fa fa-user-circle fa-2x" aria-hidden="true"></i></Link>
                    </form>
                </nav>

            </header >

        );
    }
}

export default Header