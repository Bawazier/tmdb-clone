export interface Props {
  title: string;
  adult: boolean;
  backdrop_path: string | null;
  genres: {
    id: number;
    name: string;
  }[];
  status: string;
  overview: string | null;
  release_date: string;
  cast: MovieCast[];
  crew: MovieCrew[];
}

export interface MovieCast {
  id: number;
  name: string;
}

export interface MovieCrew {
  id: number;
  name: string;
}
