import styled from "@emotion/styled";

const ContainerRoot = styled.div({
    maxWidth: 960,
    margin: '0 auto',
    padding: '0 15px',
    width: '100%'
})

export default function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
    return <ContainerRoot>{children}</ContainerRoot>
}