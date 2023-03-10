import styled from "@emotion/styled"

export const ChartRoot = styled.div({
    position: 'relative',
    backgroundColor: '#2E2E2E',
    height: '100%',
    width: '100%',
})

export const DateFilterRoot = styled.div({
    position: 'absolute',
    bottom: 16,
    left: 32,
    button: {
        backgroundColor: 'var(--white)',
        border: 'none',
        outline: 'none',
        color: '#FFCC21',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: '22px',
        height: 24,
        width: 56,
        borderRadius: 11,
    }
})

export const ChartTitle = styled.div({
    fontWeight: 400,
    fontSize: 15,
    lineHeight: '18px',
    color: 'var(--white)',
    position: 'absolute',
    top: 16,
    left: 24,
})

export const ChartDate = styled.div({
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '27px',
    color: 'var(--white)',
    position: 'absolute',
    top: 16,
    left: 120,
})