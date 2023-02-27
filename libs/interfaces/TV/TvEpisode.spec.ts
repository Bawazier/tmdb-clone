export interface TvEpisodeDetailsResponse {
  id: number;
  air_date: string;
  episode_number: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
  crew: {
    id: number;
    credit_id: string;
    name: string;
    department: string;
    job: string;
    gender: number | null;
    profile_path: string | null;
  }[];
  guest_stars: {
    id: number;
    name: string;
    credit_id: string;
    character: string;
    order: number;
    gender: number | null;
    profile_path: string | null;
  }[];
}
