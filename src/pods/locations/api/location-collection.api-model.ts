export interface LocationEntityApi {
  info: LocationInfoEntityApi;
  results: LocationResultsEntityApi[];
}

export interface LocationInfoEntityApi {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface LocationResultsEntityApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Residents[];
  url: string;
  created: string;
}

interface Residents {
  id: string;
}
