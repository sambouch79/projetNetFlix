
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { browerHistory } from 'react-dom'
import './auth.css'

export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                firstName: '',
                lastname: '',
                email: '',
                password: ''
            },
            url: ""

        }
    }
    Update = (e) => {
        let tmpUser = { ...this.state.user }
        tmpUser[e.target.name] = e.target.value
        this.setState({
            user: tmpUser
        });
    }
    login = () => {

        axios.post('http://localhost:57026/api/eusers/login', { "email": this.state.user.email, "password": this.state.user.password }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json"
            }
        }).then(Response => {

            console.log(Response)
            localStorage.setItem("name", Response.data.firstName)
            this.props.history.push('/Favoris/')

        })
        console.log(Response)
    }

    Register = () => {

        const u = { ...this.state.user }
        axios.post('http://localhost:57026/api/eusers/', u, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json"
            }
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                console.log(response.data)
                localStorage.setItem("name", response.data.firstName)

                this.props.history.push('/Favoris')

                // this.props.history.push('/Favoris/')
            } else {
                alert("user aleardy exist")

            }
        })
    }
    /*
    <div class="flip-box  h-10 ">
                    <div className="flip-box-inner  h-50">
                        <div className="flip-box-front h-50 ">
                            <h4> Welcome to Netflix </h4>
                        </div>
                        <div className="flip-box-back h-50">
                            <h4>Subscribe</h4>
                        </div>
                    </div>
                </div> */

    render() {

        return (
            <div className="formulaire bg-dark vh-100" >

                <div className="row">
                    <form className="form-Login container-fluid bg-dark">
                        <h2 className="h3 mb-3 font-weight-normal text-white">Log In</h2>
                        <div className="form-group">
                            <input type="email" id="inputEmaillogin" className="form-control " placeholder="Email address" required autoFocus />
                        </div>
                        <div className="form-group">
                            <input type="password" id="passwordlogin" className="form-control " placeholder="Password" required />
                        </div>
                        <div className="checkbox mb-3 text-white">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me</label>
                        </div>
                        <Link to={"/Favoris/"}>
                            <button onClick={this.login} className="btn btn-lg btn-primary btn-block" >Log in</button>
                        </Link>
                    </form>
                </div>
                <div className="rows">
                    <form className="form-signin bg-dark">

                        <h2 className="h3 mb-3 font-weight-normal text-white"> Sign in</h2>
                        <div class="form-group">
                            <input type="text" id="FirstName" name="FirstName" className="form-control " onChange={this.Update} placeholder="First Name" required />
                        </div>
                        <div class="form-group">
                            <input type="text" id="LastName" name="LastName" className="form-control " onChange={this.Update} placeholder="Last Name" required />
                        </div>
                        <div class="form-group">
                            <input type="email" id="inputEmail" name="email" className="form-control " onChange={this.Update} placeholder="Email address" required autoFocus />
                        </div>
                        <div class="form-group">
                            <input type="password" id="inputPassword" name="Password" onChange={this.Update} className="form-control b" placeholder="Password" required />
                        </div>

                        <button onClick={this.Register} className="btn btn-lg btn-primary btn-block" >Sign in</button>

                    </form>
                </div>
            </div >
        );
    }
}