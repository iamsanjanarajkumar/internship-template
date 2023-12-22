import React from 'react'
import '../styles/hero.css'

function Hero() {
  return (
    <>
     <div className="container-fluid hero">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="hero-text p-lg-5 p-md-3 p-sm-2">
                <h1 className="display-1 hero-heading">Don't miss this amazing deal</h1>
                <p className='fs-5 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde veritatis quia labore dolorem enim laborum voluptatum quibusdam magnam inventore, iure quaerat quod culpa perspiciatis sint nesciunt expedita maxime possimus!</p>

                <div className="btns d-flex gap-2 flex-wrap">
                    <button className='btn-outline'>LEARN MORE</button>
                    <button className="btn-solid">BUY NOW</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
                <div className="hero-image">
                    <img src="http://bloxthemes.net/landing-pages/uploads/images/blox_page_builder/headphones.png" alt="hero"  className='w-100 mt-4' />
                </div>
             </div>
        </div>
     </div>
    </>
  )
}

export default Hero