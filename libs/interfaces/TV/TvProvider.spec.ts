export interface TvProvidersResponse {
  id: number;
  results: TvProviderResults;
}

export interface TvProviderResults {
  [key: string]: {
    link: string;
    rent: TvProvider[];
    buy: TvProvider[];
    flatrate: TvProvider[];
  };
}

export interface TvProvider {
  display_priority: number;
  logo_path: string | null;
  provider_id: number;
  provider_name: string;
}
