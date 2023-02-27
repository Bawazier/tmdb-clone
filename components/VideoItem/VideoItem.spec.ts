export interface Props {
  title: string | undefined;
  data: {
    id: number;
    backdrop_path?: string;
    key?: string;
    name?: string;
    type?: string;
  }[];
  onOpen: (key?: string, name?: string) => void;
}
