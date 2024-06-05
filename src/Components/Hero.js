import React from 'react'
import '../CSS/Hero.css'
function Hero() {
    
  return (
    <div className='hero'>
        <div style={{color: "white", alignSelf:"center", marginLeft: "8%"}} className='text-start'>
        <span style={{fontSize:"70px"}} className='fw-bold'>Every order<br/> fulfilled, <span className='gradient-text'>on time.</span></span>
        <span className='fs-6'><br/>Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</span>
        <div>
          <button className="gradient-button" href='#'>Get Started with CleverBooks</button>
          <img alt='button-text' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg'></img>
        </div>
        </div>

        <div style={{background: "linear-gradient(to bottom right, black, black, rgb(147, 35, 75) )", alignSelf:"center"}}>
            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg' alt='hero1'></img>
        </div>
    </div>
  )
}

export default Hero