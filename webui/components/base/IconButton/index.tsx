import { IconButtonRoot } from "./styles";

interface IconButtonProps {
  children: JSX.Element | JSX.Element[] | string;
}

export default function IconButton({ children }: IconButtonProps) {
  return <IconButtonRoot>{children}</IconButtonRoot>;
}
