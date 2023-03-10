/// <reference types="vite-plugin-svgr/client" />
import styled from '@emotion/styled';
import Container from '../Container';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Memo } from '../../assets/svg/memo.svg';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import { ReactComponent as Challenge } from '../../assets/svg/challenge.svg';
import { ReactComponent as Info } from '../../assets/svg/info.svg';
import IconButton from '../IconButton';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Dropdown';

const HeaderRoot = styled.div({
    height: 64,
    backgroundColor: 'var(--secondary)',
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

const HeaderLogo = styled.div({
    cursor: 'pointer'
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
    color: 'var(--white)',
    fontSize: '16px',
    lineHeight: '23px',
    marginLeft: '8px',
    ':hover': {
        color: 'var(--primary)'
    }
})

export default function Header() {
    const navigate = useNavigate()
    const navigateTo = (to: string) => {
        navigate(to)
    }

    const items = [
        {
            id: 1,
            text: '自分の記録'
        },
        {
            id: 2,
            text: '体重グラフ'
        },
        {
            id: 3,
            text: '目標'
        },
        {
            id: 4,
            text: '選択中のコース'
        },
        {
            id: 5,
            text: 'コラム一覧'
        },
        {
            id: 6,
            text: '設定'
        }
    ]
    return <HeaderRoot>
        <Container>
            <HeaderWrapper>
                <HeaderLogo onClick={() => navigateTo('/')}>
                    <Logo />
                </HeaderLogo>
                <HeaderMenu>
                    <HeaderNav>
                        <HeaderNavItem onClick={() => navigateTo('/records')}>
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

                    <Dropdown element={<IconButton>
                        <Menu />
                    </IconButton>} items={items} />
                </HeaderMenu>
            </HeaderWrapper>
        </Container>
    </HeaderRoot>
}