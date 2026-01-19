import React from 'react'
import './Hero.css'
import hero from'../Assets/New folder/hero_image.png'
import hand from '../Assets/hand.png'
import arrow from '../Assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <div>
    
        <div className="hand-icon">
            <p>new</p>
            <img src={hand} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow} alt="" />
        </div>
        
    </div>
    <div className="hero-right">
        <img src={hero} alt="" />

    </div>
    </div>
  
    
  )
}

export default Hero
