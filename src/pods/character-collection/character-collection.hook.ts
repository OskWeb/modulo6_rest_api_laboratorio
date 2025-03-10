import * as React from 'react';
import { filterRickMortyCharacter, getCharacterCollection } from './api';
import {
  mapFromApiToVmResults,
  mapFromApiToVmInfo,
} from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';
import { CharactersCollectionDataEntityVm } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] =
    React.useState<CharactersCollectionDataEntityVm>(null);

  const loadCharacterCollection = (
    page: number,
    flagSearch: boolean,
    term?: string
  ) => {
    if (flagSearch) {
      console.log('entra con este termino: ' + flagSearch);
      filterRickMortyCharacter(page, term).then((data) => {
        if (data) {
          console.log(data.info);
          setCharacterCollection({
            info: mapFromApiToVmInfo(data.info),
            results: mapToCollection(data.results, mapFromApiToVmResults),
          });
        } else {
          setCharacterCollection({
            info: {
              count: 0,
              pages: 0,
              next: '',
              prev: '',
            },
            results: [],
          });
        }
      });
    } else {
      console.log('entra con este termino: ' + flagSearch);
      getCharacterCollection(page).then((data) => {
        console.log(data.info);
        setCharacterCollection({
          info: mapFromApiToVmInfo(data.info),
          results: mapToCollection(data.results, mapFromApiToVmResults),
        });
      });
    }
  };

  return { characterCollection, loadCharacterCollection };
};
