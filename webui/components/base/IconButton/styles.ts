import styled from "@emotion/styled"

export const IconButtonRoot = styled.button({
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    transition: 'background .25s',
    borderRadius: '6px',
    ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }
})