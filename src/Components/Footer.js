import React from 'react'

export const Footer = () => {
  return (
    <div>
           <footer>
          <div className="container">
            <div className="top flex">
              <div className="links">
                <h2 className="title">LINKS</h2>
                <ul>
                  <li>Home</li>
                  <li>Skills</li>
                  <li>Projects</li>
                  <li>About Me</li>
                </ul>
              </div>
              <div className="socials">
                <h2 className="socials">SOCIALS</h2>
                <ul>
                  <li>LinkedIn</li>
                  <li>Github</li>
                  <li>Youtube</li>
                </ul>
              </div>
            </div>
            <div className="bottom">© All right reserved</div>
          </div>
        </footer>
    </div>
  )
}
