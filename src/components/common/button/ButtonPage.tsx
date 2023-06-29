import React from 'react'
import Button from '@mui/material/Button'

interface IProps {
  title: string
}

function ButtonPage({ title }: IProps) {
  return (
    <div>
      <Button variant="outlined" sx={{ m: 0.5 }}>
        {title}
      </Button>
    </div>
  )
}

export default ButtonPage
