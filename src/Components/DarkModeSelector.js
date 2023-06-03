import React from 'react'

export const DarkModeSelector = () => {
  return (
    <div>
        <input type="checkbox" id="darkMode" />
        <label for="darkMode" className="dark-mode-toggle">
            <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
    </div>
  )
}
