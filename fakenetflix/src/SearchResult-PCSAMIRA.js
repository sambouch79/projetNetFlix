import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom'




export default class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: dataservices.films,
            filmsSearch: [],
            exist: false,
            search: ""
        }
    }

    componentDidMount() {
        console.log("je monte le composant")
        const text = this.props.match.params.searchText
        console.log(text)
        this.Search(text);



    }
    Search = (text) => {
        let tmpMovies
        tmpMovies = this.state.films.filter(a => (a.titre.includes(text)))
        console.log(tmpMovies)
        if (tmpMovies.length == 0) {

            this.setState({
                exist: false,
                search: text
            })

        } else {
            this.setState({
                filmsSearch: tmpMovies,
                exist: true,
                search: text
            })
        }
    }
    shouldComponentUpdate() {
        return true;
    }
    componentDidUpdate() {
        console.log("updated")
        let text = this.props.match.params.searchText

        if (this.state.search != text && text != "") {
            this.Search(text)
            this.setState({
                search: text
            })
        }
    }



    render() {
        return (
            <div >
                <div className="container-fluid   bg-dark vh-100">
                    {this.state.exist && this.state.filmsSearch.map(elt => {
                        return (<div >

                            <div className=" row p-2">

                                <div className="col">
                                    <img className="imgaff" src={elt.Imgband} alt="img"></img>
                                </div>
                                <div className="col">
                                    <h2 className=" detail text-white" >{elt.titre}</h2>
                                    <p className="detail"><strong>Overview</strong>: {elt.Overview}</p>
                                    <p className="detail"><strong>Released Date</strong>: {elt.ReleasedDate}</p>
                                    <p className="detail"><strong>Rating</strong>: {elt.Rating}</p>
                                    <p className="detail"><strong>Genre</strong>: {elt.Genres}</p>
                                </div>
                            </div>
                        </div>)
                    })
                    }
                    {!this.state.exist && <div>
                        <div className="jumbotron  bg-dark text-white-50 m-0 vh-100 "  ><h1 className="text-center font-weight-bold">NOT FOUND</h1>
                        </div>
                    </div>}

                </div>
            </div >
        );
    }
}