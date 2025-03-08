import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Pagination } from '@mui/material';
import { SearchCharacter } from './components/searchCharacter';
import { Loading } from '../../common/components/loading';
import { DataNotFound } from '#common/components/dataNotFound';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  count: any;
  page: number;
  handleChangeFilter: (event: React.ChangeEvent<unknown>, value: number) => void;
  handleChangeGeneral: (event: React.ChangeEvent<unknown>, value: number) => void;
  onReset: () => void;
  loading;
  term;
  flagSearch: boolean;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onEdit, onDelete, count, page, handleChangeFilter, handleChangeGeneral, onReset, loading, term, flagSearch } = props;

  React.useEffect(() => {
    console.log(characterCollection);
  }, [characterCollection])

  return (
    <div className={classes.root}>
      <SearchCharacter onReset={onReset} />
      {
        // loading ? (
        //   <Loading />
        // ) : (
        characterCollection ? (
          flagSearch ? (
            <div>
              <h2 className='title'>Resultado de búsqueda para "{term}"</h2>
              <ul className={classes.list}>
                {
                  characterCollection.map((character) => (
                    <li key={character.id}>
                      <CharacterCard character={character} onEdit={onEdit} />
                    </li>
                  ))
                }
              </ul>
              <Pagination
                count={count}
                page={page}
                onChange={handleChangeFilter}
                siblingCount={0}
                sx={{
                  display: 'flex',
                  justifyContent: 'end'
                }}
              />
            </div>
          ) : (
            <div>
              <h2 className='title'>Listado de personajes</h2>
              <ul className={classes.list}>
                {
                  characterCollection.map((character) => (
                    <li key={character.id}>
                      <CharacterCard character={character} onEdit={onEdit} />
                    </li>
                  ))
                }
              </ul>
              <Pagination
                count={count}
                page={page}
                onChange={handleChangeGeneral}
                siblingCount={0}
                sx={{
                  display: 'flex',
                  justifyContent: 'end'
                }}
              />
            </div>
          )
        ) : (
          <DataNotFound term={term} />
        )
        // )
      }
    </div>
  );
};
