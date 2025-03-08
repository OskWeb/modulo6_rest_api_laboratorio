export interface EpisodeEntityApi {
  info: EpisodeInfoEntityApi;
  results: EpisodeResultsEntityApi[];
}

export interface EpisodeInfoEntityApi {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface EpisodeResultsEntityApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Characters[];
  url: string;
  created: string;
}

interface Characters {
  id: string;
}
