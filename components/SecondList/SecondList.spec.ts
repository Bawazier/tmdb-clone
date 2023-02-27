export interface Props {
  title: string;
  data: { id: number; backdrop_path: string | null }[];
  onOpen: (id: number) => void;
}
