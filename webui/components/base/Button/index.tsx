import { ButtonRoot } from "./styles";

interface ButtonProps {
  children: JSX.Element | string;
  loading?: boolean;
  onClick?: () => void;
}

export default function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <ButtonRoot disabled={loading} {...rest}>
      {loading && 'Loading...'}
      {!loading && <span style={{ marginLeft: 8 }}>{children}</span>}
    </ButtonRoot>
  );
}
