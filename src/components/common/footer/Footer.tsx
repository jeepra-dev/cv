import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <AppBar position="static" sx={{ p: 1.5, mt: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          Copyright ©2023 All rights reserved | MMamadou SALL & Ibrahima DIALLO
        </Typography>
      </AppBar>
    </div>
  )
}

export default Footer
