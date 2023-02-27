export interface Props {
  title: string;
  data: { poster_path: string | null; id: number }[];
  onOpen: (id: number) => void;
}
