import { LocationEntityApi } from './location-collection.api-model';

export const getLocationCollection = async (
  page: number
): Promise<LocationEntityApi> => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`
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
