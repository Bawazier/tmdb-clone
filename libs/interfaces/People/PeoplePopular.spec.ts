export interface PopularPeople {
  page: number;
  results: PopularPerson[];
  total_pages: number;
  total_results: number;
}

export interface PopularPerson {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string | null;
}

export interface KnownFor {
  backdrop_path: string | null;
  first_air_date?: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name?: string;
  origin_country?: string[];
  original_language: string;
  original_name?: string;
  overview: string;
  poster_path: string | null;
  release_date?: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
