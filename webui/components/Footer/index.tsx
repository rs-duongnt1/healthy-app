import Container from "@/components/base/Container"
import { FooterNav, FooterNavItem, FooterNavItemText, FooterRoot } from "./styles"

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