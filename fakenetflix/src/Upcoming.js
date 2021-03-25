import React, { Component } from 'react';
import { dataservices } from "./service/dataservice"
import InfiniteCarousel from 'react-leaf-carousel'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class NowPlaying extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            ImageFilm: []
        }
    }
    componentDidMount() {
        console.log("didmont")
        axios.get('http://localhost:57026/api/Film')
            .then((response) => {

                let ordredMovie = []
                let i = 0
                for (let o of response.data) {
                    const b = {
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
                    ordredMovie[i] = b
                    i = i + 1
                    console.log(ordredMovie)
                }
                console.log(ordredMovie)

                // ordredMovie.sort((a, b) => b.runtime - a.runtime)
                //let topPopular = ordredMovie //.slice(0, 9);
                this.setState({
                    films: ordredMovie,
                })
                this.renderImages()
            });
    }

    renderImages = () => {
        let images = []
        let filmsI = [...this.state.films]
        //console.log(this.state.films.length)
        for (let i = 0; i < filmsI.length; i++) {
            let f = filmsI[i].imageBand
            let l = filmsI[i].id
            let t = filmsI[i].title
            console.log(f, l)
            images.push(
                { f, l, t }
            )
        }
        this.setState({
            ImageFilm: images
        })
        console.log(images)

        return images
    }


    render() {


        return (
            <div>
                <div className="container-fluid">
                    <h1 className="text-left">Up Coming</h1>

                    <div className="row">
                        {this.state.ImageFilm.map(e => {
                            return (
                                <div className="col">
                                    <div class="card bg-dark text-white effect">
                                        <Link to={`/MovieDetail/${e.l}`}>
                                            <img src={e.f} class="card-img " alt="...aaa" />
                                        </Link>
                                        <div class="card-img-overlay">
                                            <h5 class="card-title">{e.t}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        );

    }
}