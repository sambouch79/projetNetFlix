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
                        <p>  titre   </p>
                        <p>description</p>
                        <button className=" btn btn-link myListbtn"><i class="fa fa-plus-square-o" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${gravity})` }}>
                        <p>  titre   </p>
                        <p>description</p>
                        <p>{}</p>
                        <button className=" btn btn-link myListbtn"><i class="fa fa-plus-square-o" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${StrangerThings})` }}>
                        <p>{}</p>
                        <p>  titre   </p>
                        <p>description</p>
                        <button className="btn btn-link myListbtn"><i class="fa fa-plus-square-o" aria-hidden="true"></i></button>
                    </div>
                </div>
            </Slide>
        </div >
    )
}
export default Slideshow
