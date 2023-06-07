import React from 'react'

export const Contact = () => {
  return (
    <div>
        <section className="touch" id="contact">
          <h2 className="title">Get In Touch</h2>
          <div className="social-links container">
            <div className="social-media flex">
              <a href=""> <i className="fa-brands fa-linkedin"></i></a>
              <a href=""> <i className="fa-brands fa-twitter"></i></a>
              <a href=""> <i className="fa-brands fa-square-facebook"></i></a>
              <a href=""> <i className="fa-brands fa-youtube"></i></a>
            </div>
            <h2 className="title">OR</h2>
            <a href="mailto:laxman@gmail.com">
              <div className="email-section flex">
                <div className="email flex">
                  <span>lx.mgr07@gmail.com</span>
                  <div className="snd-email">
                    <i className="fa-solid fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
    </div>
  )
}
