import React from 'react'
import Typography from '@mui/material/Typography'

function Logo() {
  return (
    <div>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontSize: '1.5em',
          fontFamily: "'Rampart One', cursive",
          color: '#1976d2',
        }}
      >
        MY PORTFOLIO
      </Typography>
    </div>
  )
}

export default Logo
