import React from 'react'
import './Card.css'

interface IProps {
  children: any
  className: any
}
function Card(props: IProps) {
  const { className, children } = props

  const classes = `card-container ${className}`

  return <div className={classes}>{children}</div>
}

export default Card
