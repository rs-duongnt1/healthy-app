import { ContainerRoot } from "./styles";

export default function Container({ children }: { children: JSX.Element | JSX.Element[] | any }) {
    return <ContainerRoot>{children}</ContainerRoot>
}