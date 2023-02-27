export interface Props {
  title: string;
  seasons: {
    season_number: number;
    name: string;
    air_date: string;
    overview: string;
  }[];
  onSelectSeasons: (seasons_id: number) => void;
  data: {
    still_path: string;
    episode_number: string;
    name: string;
    overview: string;
  }[];
}

export interface data {
  isSuccess: boolean;
  data: {
    still_path: string;
    episode_number: string;
    name: string;
    overview: string;
  }[];
}
