import React from 'react'
import Logo from '../logo/Logo'
import ButtonPage from '../button/ButtonPage'
import './Header.css'

function Header() {
  return (
    <div className="header-container">
      <Logo />
      <div className="header-button">
        <ButtonPage title="OOWNLOAD CV" />
        <ButtonPage title="DISCOVER ME" />
      </div>
    </div>
  )
}

export default Header
