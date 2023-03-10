import styled from "@emotion/styled"

const ButtonRoot = styled.button({
    background: 'linear-gradient(32.95deg, #FFCC21 8.75%, var(--primary) 86.64%)',
    border: 'none',
    fontSize: 18,
    lineHeight: '26px',
    padding: '15px 0',
    minWidth: 296,
    borderRadius: 6,
    color: 'var(--white)',
    fontWeight: 300,
    transition: 'background .25s',
    outline: 'none',
    ":hover": {
        background: 'linear-gradient(32.95deg, #ebb500 8.75%, #ff8114 86.64%)',
    }
})

interface ButtonProps {
    children: JSX.Element | string
}

export default function Button({ children }: ButtonProps) {
    return <ButtonRoot>{children}</ButtonRoot>
}