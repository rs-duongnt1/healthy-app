import styled from "@emotion/styled"
import Container from "../Container"

const FooterRoot = styled.div({
    backgroundColor: 'var(--secondary)',
    height: '128px',
    display: 'flex',
    alignItems: 'center'
})

const FooterNav = styled.ul({
    display: 'flex',
    alignItems: 'center',
})

const FooterNavItem = styled.li(({ firstChild }: { firstChild?: boolean }) => ({
    marginLeft: firstChild ? '0' : '45px',
    cursor: 'pointer'
}))
const FooterNavItemText = styled.span({
    color: 'var(--white)',
    fontSize: '11px',
    lineHeight: '16px',
})

export default function Footer() {
    return <FooterRoot>
        <Container>
            <FooterNav>
                <FooterNavItem firstChild>
                    <FooterNavItemText>会員登録</FooterNavItemText>
                </FooterNavItem>
                <FooterNavItem>
                    <FooterNavItemText>運営会社</FooterNavItemText>
                </FooterNavItem>
                <FooterNavItem>
                    <FooterNavItemText>利用規約</FooterNavItemText>
                </FooterNavItem>
                <FooterNavItem>
                    <FooterNavItemText>個人情報の取扱について</FooterNavItemText>
                </FooterNavItem>
                <FooterNavItem>
                    <FooterNavItemText>特定商取引法に基づく表記</FooterNavItemText>
                </FooterNavItem>
                <FooterNavItem>
                    <FooterNavItemText>お問い合わせ</FooterNavItemText>
                </FooterNavItem>
            </FooterNav>
        </Container>
    </FooterRoot>
}