export interface Props {
  genres: { id: number; name: string }[];
  status: string;
  cast: { id: number; name: string }[];
  providers?: {
    buy?: MovieWatchProvider[];
    rent?: MovieWatchProvider[];
    flatrate?: MovieWatchProvider[];
  };
}

export interface MovieWatchProvider {
  display_priority: number;
  logo_path: string | null;
  provider_id: number;
  provider_name: string;
}
