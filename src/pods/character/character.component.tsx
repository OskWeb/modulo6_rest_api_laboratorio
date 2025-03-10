import React from 'react';
import { Character } from './character.vm';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { cardImage, characterCardContent, characterDetailContainer, link } from './character.styles';
import { Link } from 'react-router-dom';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (

    <div className={characterDetailContainer}>
      <Card>
        <CardContent className={characterCardContent}>
          <div>
            <CardMedia
              image={character.image}
              title={character.name}
              className={cardImage}
            />
          </div>
          <div>
            <Typography variant='h5' gutterBottom sx={{ color: 'text.secondary' }}>
              {character.name}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Gender: {character.gender}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Species: {character.species}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Origin: {character.origin.name}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Status: {character.status}
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Location: {character.location.name}
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Link className={link} to={"/"}>Volver</Link>
    </div>
  );
};
