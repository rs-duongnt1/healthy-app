import styled from "@emotion/styled"

const IconButtonRoot = styled.button({
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    transition: 'background .25s',
    borderRadius: '6px',
    ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }
})

interface IconButtonProps {
    children: JSX.Element | string
}

export default function IconButton({ children }: IconButtonProps) {
    return <IconButtonRoot>{children}</IconButtonRoot>
}