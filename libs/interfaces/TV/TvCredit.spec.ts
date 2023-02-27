export interface TvCreditsResponse {
  id: number;
  cast: {
    id: number;
    character: string;
    name: string;
    profile_path: string | null;
  }[];
  crew: {
    id: number;
    job: string;
    name: string;
    profile_path: string | null;
  }[];
}
