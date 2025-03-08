export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}
interface Location {
  name: string;
  url: string;
}

export interface CharactersInfoEntityApi {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharactersCollectionData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterEntityApi[];
}
