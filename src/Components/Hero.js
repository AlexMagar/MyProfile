import React from 'react'

export const Hero = () => {
  return (
    <div>
         <section className="hero-section container" id="home">
          <div className="hero">
            <div className="left flex">
              <div>
                Hi I'm
                <span className="name">Laxman Magar</span>
              </div>
              <div className="tag">Soft. Engineer</div>
              <p>I love coding and teach other what i know</p>
              <div>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
            <div className="right">
              <img src="./assets/portfolio-removebg-preview.png" alt="#" />
            </div>
          </div>
        </section>
    </div>
  )
}
