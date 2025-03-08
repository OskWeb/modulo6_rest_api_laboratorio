import { EpisodeEntityApi } from './episode-collection.api-model';

export const getEpisodeCollection = async (
  page: number
): Promise<EpisodeEntityApi> => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};
