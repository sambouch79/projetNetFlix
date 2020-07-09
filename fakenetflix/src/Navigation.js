import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import './App.css'

export default class Navigation extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route render={() => <Home></Home>} path='/' exact>
                    </Route>
                    <Route path='/1'>
                    </Route>
                    <Route path='/2'>
                    </Route>
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        )
    }
}