import React from 'react'

export const Banner = () => {
  return (
    <div>
        <section className="banner flex container">
          {/* <!-- ==== award === --> */}
          <div className="info-content flex">
            <div className="icon-container flex">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>IT</span>
              <p>Graduate</p>
            </div>
          </div>

          {/* <!-- ===divider=== --> */}
          <div className="info-divider"></div>

          {/* <!-- ==== award === --> */}
          <div className="info-content flex">
            <div className="icon-container flex">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>5 + Projects</span>
              <p>Completed</p>
            </div>
          </div>

          {/* <!-- ===divider=== --> */}
          <div className="info-divider"></div>

          {/* <!-- ==== award === --> */}
          <div className="info-content flex">
            <div className="icon-container flex">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>1 Year</span>
              <p>Experience</p>
            </div>
          </div>
        </section>
    </div>
  )
}
