import { CharactersCollectionData } from './character-collection.api-model';

export const getCharacterCollection = async (
  page: number
): Promise<CharactersCollectionData> => {
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
  }
};

export const filterRickMortyCharacter = async (page: number, term: string) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${term}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};
