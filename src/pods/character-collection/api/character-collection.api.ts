import { CharacterEntityApi } from './character-collection.api-model';
// import { mockCharacterCollection } from './character-collection.mock-data';

// let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  // devolver coleccion de la API
  // return characterCollection;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // eliminar de la api
  // characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
