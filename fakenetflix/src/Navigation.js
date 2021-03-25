import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { browserHistory } from 'react-router'
import Header from "./Header"
import Home from "./Home"
import Favoris from './Favoris'
import Footer from "./Footer"
import MovieDetail from './movieDetails/MovieDetail'
import test from './test'
import Auth from './authentification/Auth'
import SearchResult from './SearchResult'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


export default class Navigation extends Component {

    render() {
        return (
            <Router>
                <Header ></Header>
                <Switch>
                    <Route render={() => <Home></Home>} path='/' exact>
                    </Route>
                    <Route path='/MovieDetail/:id' component={MovieDetail}>
                    </Route>
                    <Route path='/Auth' component={Auth}>
                    </Route>
                    <Route path='/SearchResult/:searchText' component={SearchResult}>
                    </Route>
                    <Route path='/Favoris' component={Favoris}>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router >
        )
    }
}