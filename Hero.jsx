import React from 'react'
import './Hero.css';
import arrow4 from '../../assets/arrow4.png';
import hero_image1 from '../../assets/hero_image1.jpg';
export const Hero = () => {
    return(
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="aa">
                    <div className='hero-hand-icon'>
                        <p>New</p>
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                   <div> <img src={arrow4} width="80px" alt="" /> </div>
                </div>                

            </div>
            <div className='hero-right'>
                <img src={hero_image1} width="600"  alt=""/>
            </div>

        </div>
    )
}
export default Hero;