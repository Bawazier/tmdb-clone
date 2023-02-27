export interface Props {
  title: string;
  overview: string | null;
  backdrop: string;
  onOpen: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
