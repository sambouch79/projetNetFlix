import React, { Component } from 'react'
import axios from 'axios';
import { dataservices } from "./../service/dataservice"
import { browerHistory } from 'react-router'
import './movieDetail.css'

export default class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: [],


        }
    }

    componentDidMount = () => {
        let idFilm = this.props.match.params.id
        console.log(idFilm)
        axios.get('http://localhost:57026/api/Film/' + idFilm)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    film: response.data,

                })
            });



        //flm = this.state.films.filter(elt => elt.id == idFilm)

        /* const casting = flm[0].Cast
         const f = [...this.state.filmsCast]
         console.log(f)
         let actorsList = []
 
         for (let i of casting) {
             console.log(i)
             const actor = f.filter(p => p.id === i)
             actorsList.push(actor)
         }
         console.log(actorsList) */


    }
    handleClick = (e) => {
        const cl = e.target.classList;
        console.log(cl.contains("heartclicked"))
        if (cl.contains("heartclicked")) {
            e.target.classList.remove("heartclicked")
        } else {
            e.target.classList.add("heartclicked");
        }

    }

    render() {

        return (

            < div className="container-fluid bg-dark" >
                <div className="row  filmDetail vh-100">
                    <div className="col ">
                        <div className="cont">
                            <img className="imgaff" src={this.state.film.imageBand} alt="" />

                            <i className="heart fa fa-heart fa-3x " aria-hidden="true" onClick={this.handleClick}></i>
                        </div>
                    </div>
                    <div className="col ">

                        <h2>id: {this.state.film.id}</h2>
                        <h1 className="text-white-50 p-1">Title : {this.state.film.title}</h1>
                        <p className="detail"><strong>Overview</strong>: {this.state.film.overview}</p>
                        <p className="detail"><strong>Released Date</strong>: {this.state.film.releaseDate}</p>
                        <p className="detail"><strong>Rating</strong>: {this.state.film.rating}</p>
                        <p className="detail"><strong>Genre</strong>: {this.state.film.genre}</p>
                    </div>
                </div>

            </div >




        );
    }
}