import React from 'react'
import Header from '../../components/common/header/Header'
import Banderole from '../../components/common/banderole/Banderole'
import Card from '../../components/common/card/Card'
import './WelcomePage.css'

function WelcomePage() {
  return (
    <Card className="welcome-container">
      <Header />
      <Banderole />
    </Card>
  )
}

export default WelcomePage
