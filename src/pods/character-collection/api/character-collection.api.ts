import {
  CharacterEntityApi,
  CharactersCollectionData,
} from './character-collection.api-model';

export const getCharacterCollection = async (
  page: number,
  setLoading
): Promise<CharactersCollectionData> => {
  setLoading(true);

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    if (response.ok) {
      const data = response.json();
      console.log(data);
      return await data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log('Error fetching data:', error);
  } finally {
    setLoading(false);
  }
};

export const filterRickMortyCharacter = async (
  page: number,
  term: string,
  setLoading
) => {
  setLoading(true);

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${term}`
    );
    const data = await response.json();

    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log('Error fetching data:', error);
  } finally {
    setLoading(false);
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // eliminar de la api
  // characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
