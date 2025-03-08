import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from '#common/components';
import { Lookup } from '#common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { cardImage, characterCardContent, characterDetailContainer, link } from './character.styles';
import { Link } from 'react-router-dom';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
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

      )}
    </Formik>
  );
};
