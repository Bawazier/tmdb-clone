export interface Props {
  data: { id: number; backdrop_path: string | null }[];
  onOpen: (id: number) => void;
}
