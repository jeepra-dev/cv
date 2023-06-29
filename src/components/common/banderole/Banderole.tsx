import React from 'react'

import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

import image from '../../../assets/images/image4.jpg'

import './Banderole.css'

function Banderole() {
  return (
    <div className="banderole-container">
      <div className="left-banderole">
        <div className="banderole-presentation">
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              pr: 8,
            }}
          >
            Ibrahima Diallo
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              pr: 3,
            }}
          >
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l&apos;imprimerie depuis les années 1500,
            quand un imprimeur anonyme assembla ensemble des morceaux de texte
            pour réaliser un livre spécimen de polices de texte. Il n&apos;a pas
            fait que survivre cinq siècles, mais s&apos;est aussi adapté à la
            bureautique informatique, sans que son contenu n&apos;en soit
            modifié.
          </Typography>
        </div>
        <div className="banderole-infos">
          <Typography variant="h4" gutterBottom>
            Général Info
          </Typography>
        </div>
      </div>
      <div className="right-banderole">
        <CardMedia
          component="img"
          image={image}
          alt="Paella dish"
          sx={{
            maxWidth: '100%',
          }}
        />
      </div>
    </div>
  )
}

export default Banderole
