export interface MovieWatchProvidersResponse {
  id: number;
  results: MovieWatchProviderResults;
}

export interface MovieWatchProviderResults {
  [key: string]: {
    link: string;
    rent: MovieWatchProvider[];
    buy: MovieWatchProvider[];
    flatrate: MovieWatchProvider[];
  };
}

export interface MovieWatchProvider {
  display_priority: number;
  logo_path: string | null;
  provider_id: number;
  provider_name: string;
}
