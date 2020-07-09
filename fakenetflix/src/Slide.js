import React from 'react'
import { Slide } from 'react-slideshow-image'
import BladeRunner from './imgfilms/ImgCarou/ladeRunner.jpg'
import gravity from './imgfilms/ImgCarou/gravity.jpg'
import StrangerThings from './imgfilms/ImgCarou/StrangerThings'


const propriety = {
    indicators: true,
    arrows: true,

}
const Slide = () => {
    return (
        <div className="slides">
            <Slide {...propriety}>
                <div className="slide">
                    <div> <img src={BladeRunner}></img></div>
                </div>
                <div className="slide">
                    <div> <img src={gravity}></img></div>
                </div>
                <div className="slide">
                    <div> <img src={StrangerThings}></img></div>
                </div>
            </Slide>
        </div>
    )
}
export default Slide
