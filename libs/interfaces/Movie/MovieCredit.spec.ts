export interface MovieCreditsResponse {
  id: number;
  cast: MovieCast[];
  crew: MovieCrew[];
}

export interface MovieCast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
}

export interface MovieCrew {
  credit_id: string;
  department: string;
  gender: number | null;
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
}
