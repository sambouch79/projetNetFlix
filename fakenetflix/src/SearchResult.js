import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './movieDetails/movieDetail.css'
import axios from 'axios'




export default class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            filmsSearch: [],
            exist: false,
            search: ""
        }
    }

    componentDidMount() {
        const text = this.props.match.params.searchText
        axios.get('http://localhost:57026/api/Film')
            .then(response => {
                let result
                let s
                console.log(response)
                let Movies = []
                let i = 0
                for (let o of response.data) {
                    const m = {
                        "id": o.id,
                        "title": o.title,
                        "overview": o.overview,
                        "imageBand": o.imageBand,
                        "genre": o.genre,
                        "releaseDate": o.releaseDate,
                        "runtime": o.runtime,
                        "rating": o.rating,
                        "isPlaying": o.isPlaying,
                        "actors": o.actors
                    }

                    console.log(o.title)
                    Movies[i] = m
                    i = i + 1
                    console.log(Movies)
                }
                console.log(Movies)
                if (Movies != null) {
                    result = Movies.filter(a => (a.title.includes(text)))
                    s = true
                    console.log(result)
                } else {
                    s = false
                }


                this.setState({
                    films: Movies,
                    filmsSearch: result,
                    exist: s
                })
            });
        console.log(this.state.films)
        console.log("je monte le composant")
        //const text = this.props.match.params.searchText
        console.log(text)


    }
    Search = (text) => {

        let tmpMovies
        tmpMovies = this.state.films.filter(a => (a.title.includes(text)))


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
        console.log(this.state.films)
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
                <div className="container-fluid   bg-dark ">
                    {this.state.exist && this.state.filmsSearch.map(elt => {
                        return (<div className="container-fluid vh-100" >

                            <div className=" row p-4 ">

                                <div className="col">
                                    <img className="imgaff" src={elt.imageBand} alt="img"></img>
                                </div>
                                <div className="col">
                                    <h2 className=" detail text-white" >{elt.title}</h2>
                                    <p className="detail"><strong>Overview</strong>: {elt.overview}</p>
                                    <p className="detail"><strong>Released Date</strong>: {elt.releaseDate}</p>
                                    <p className="detail"><strong>Rating</strong>: {elt.rating}</p>
                                    <p className="detail"><strong>Genre</strong>: {elt.genre}</p>
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