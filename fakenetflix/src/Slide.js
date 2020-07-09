import React from 'react'
import { Slide } from 'react-slideshow-image'
import BladeRunner from './imgfilms/ImgCarou/BladeRunner.jpg'
import gravity from './imgfilms/ImgCarou/gravity.jpg'
import StrangerThings from './imgfilms/ImgCarou/StrangerThings.jpg'
import 'react-slideshow-image/dist/styles.css'

const proprietes = {
    indicators: true,
    arrows: true,
    infinite: true,
}
const Slideshow = () => {
    return (
        <div className="slide-container">

            <Slide {...proprietes} >
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${BladeRunner})` }}>
                        <h1> BladeRunner</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <button className=" btn btn-link myListbtn"><i class="fa fa-plus-square-o fa-3x" ></i></button>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${gravity})` }}>
                        <h1> gravity </h1>
                        <p> sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>{}</p>
                        <button className=" btn btn-link myListbtn"><i class="fa fa-plus-square-o fa-3x" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${StrangerThings})` }}>
                        <h1> StrangerThings </h1>
                        <p> sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="btn btn-link myListbtn"><i class="fa fa-plus-square-o fa-3x" aria-hidden="true"></i></button>
                    </div>
                </div>
            </Slide>
        </div >
    )
}
export default Slideshow
