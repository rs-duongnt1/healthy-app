import styled from "@emotion/styled"

export const FooterRoot = styled.div({
    backgroundColor: 'var(--secondary)',
    height: '128px',
    display: 'flex',
    alignItems: 'center'
})

export const FooterNav = styled.ul({
    display: 'flex',
    alignItems: 'center',
})

export const FooterNavItem = styled.li(({ firstChild }: { firstChild?: boolean }) => ({
    marginLeft: firstChild ? '0' : '45px',
    cursor: 'pointer'
}))
export const FooterNavItemText = styled.span({
    color: 'var(--white)',
    fontSize: '11px',
    lineHeight: '16px',
})
