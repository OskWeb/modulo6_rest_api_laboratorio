export interface EpisodeEntityVM {
  info: EpisodeInfoEntityVM;
  results: EpisodeResultsEntityVM[];
}

export interface EpisodeInfoEntityVM {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface EpisodeResultsEntityVM {
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
