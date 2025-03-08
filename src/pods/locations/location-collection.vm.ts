export interface LocationEntityVM {
  info: LocationInfoEntityVM;
  results: LocationResultsEntityVM[];
}

export interface LocationInfoEntityVM {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface LocationResultsEntityVM {
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
