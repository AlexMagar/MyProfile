import React from 'react'

export const Headers = () => {
  return (
    <div>
        <header>
          <div className="container flex header">
            <div className="logo flex">
              <div>
                <h1><a href="#home">Laxman</a></h1>
              </div>
              <div>
                <h1 className="line">Soft. Engineer</h1>
              </div>
            </div>
            <div className="menu">
              <input type="checkbox" id="check" />
              <label htmlFor="check" className="menu-icon">
                <i className="fa-solid fa-bars"></i>
              </label>
              <ul className="navigation flex">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#skills">Skills </a></li>
                <li><a href="#projects">Projects </a></li>
                <li><a href="#about-me">About </a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </header>
    </div>
  )
}
