import React from 'react'

export const About = () => {
  return (
    <div>
         <section className="about" id="about-me">
          <div className="container">
            <h1>About Me</h1>
            <div className="about-content flex">
              <div className="about-left">
                <img src="./assets/portfolio-removebg-preview.png" alt="#" />
              </div>
              <div className="about-right">
                <span className="title">Laxman Magar</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  recusandae ad perferendis quae, vero aliquid aut id odit? Odio
                  natus delectus quas ratione enim. Culpa quae praesentium eum
                  nobis iure.
                </p>

                <address>Sydney Australia</address>

                <div className="about-intrest">
                  <div className="interest">Interest</div>
                  <div className="flex">
                    <span>coding</span>
                    <span>Football</span>
                    <span>Movies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
