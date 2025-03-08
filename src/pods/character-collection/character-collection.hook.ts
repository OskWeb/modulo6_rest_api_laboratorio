import * as React from 'react';
import { filterRickMortyCharacter, getCharacterCollection } from './api';
import {
  mapFromApiToVmResults,
  mapFromApiToVmInfo,
} from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';
import { CharacterEntityVm } from './character-collection.vm';
import { CharactersCollectionDataEntityVm } from './character-collection.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] =
    React.useState<CharactersCollectionDataEntityVm>(null);

  const loadCharacterCollection = (
    page: number,
    flagSearch: boolean,
    term?: string,
    setLoading?: any
  ) => {
    // if (term) {
    if (flagSearch) {
      console.log('entra con este termino: ' + flagSearch);
      filterRickMortyCharacter(page, term, setLoading).then((data) => {
        console.log(data.info);
        setCharacterCollection({
          info: mapFromApiToVmInfo(data.info),
          results: mapToCollection(data.results, mapFromApiToVmResults),
        });
      });
    } else {
      console.log('entra con este termino: ' + flagSearch);
      getCharacterCollection(page, setLoading).then((data) => {
        console.log(data.info);
        setCharacterCollection({
          info: mapFromApiToVmInfo(data.info),
          results: mapToCollection(data.results, mapFromApiToVmResults),
        });
      });
    }
    // }
  };

  return { characterCollection, loadCharacterCollection };
};
