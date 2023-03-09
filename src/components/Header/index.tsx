/// <reference types="vite-plugin-svgr/client" />
import styled from '@emotion/styled';
import Container from '../Container';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Memo } from '../../assets/svg/memo.svg';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import { ReactComponent as Challenge } from '../../assets/svg/challenge.svg';
import { ReactComponent as Info } from '../../assets/svg/info.svg';
import IconButton from '../IconButton';

const HeaderRoot = styled.div({
    height: 64,
    backgroundColor: '#414141',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const HeaderWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
})
const HeaderMenu = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const HeaderNav = styled.div({
    marginRight: '16px',
    display: 'flex',
})

const HeaderNavItem = styled.div({
    display: 'flex',
    alignItems: 'center',
    width: '160px',
    cursor: 'pointer'
})

const HeaderNavItemText = styled.span({
    color: '#fff',
    fontSize: '16px',
    lineHeight: '23px',
    marginLeft: '8px',
    ':hover': {
        color: '#FF963C'
    }
})

export default function Header() {
    return <HeaderRoot>
        <Container>
            <HeaderWrapper>
                <Logo />
                <HeaderMenu>
                    <HeaderNav>
                        <HeaderNavItem>
                            <Memo />
                            <HeaderNavItemText>自分の記録</HeaderNavItemText>
                        </HeaderNavItem>
                        <HeaderNavItem>
                            <Challenge />
                            <HeaderNavItemText>チャレンジ</HeaderNavItemText>
                        </HeaderNavItem>
                        <HeaderNavItem>
                            <Info />
                            <HeaderNavItemText>お知らせ</HeaderNavItemText>
                        </HeaderNavItem>
                    </HeaderNav>
                    <IconButton>
                        <Menu />
                    </IconButton>
                </HeaderMenu>
            </HeaderWrapper>
        </Container>
    </HeaderRoot>
}