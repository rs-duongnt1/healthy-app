/// <reference types="vite-plugin-svgr/client" />
import Container from "@/components/base/Container";
import { ReactComponent as Logo } from "@/assets/svg/logo.svg";
import { ReactComponent as Memo } from "@/assets/svg/memo.svg";
import { ReactComponent as Menu } from "@/assets/svg/menu.svg";
import { ReactComponent as Challenge } from "@/assets/svg/challenge.svg";
import { ReactComponent as Info } from "@/assets/svg/info.svg";
import IconButton from "@/components/base/IconButton";
import { useNavigate, useLocation } from "react-router-dom";
import Dropdown, { DropdownItem } from "@/components/base/Dropdown";
import {
  HeaderLogo,
  HeaderMenu,
  HeaderNav,
  HeaderNavItem,
  HeaderNavItemText,
  HeaderRoot,
  HeaderWrapper,
} from "./styles";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const navigateTo = (to: string) => {
    navigate(to);
  };
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  let location = useLocation();
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [location]);

  const path = location.pathname;

  console.log(path);

  const items = [
    {
      id: 1,
      text: "自分の記録",
      href: "/records",
    },
    {
      id: 2,
      text: "体重グラフ",
      href: null,
    },
    {
      id: 3,
      text: "目標",
      href: null,
    },
    {
      id: 4,
      text: "選択中のコース",
      href: null,
    },
    {
      id: 5,
      text: "コラム一覧",
      href: "/columns",
    },
    {
      id: 6,
      text: "設定",
      href: null,
    },
  ];

  const navItems = [
    {
      id: 1,
      text: "自分の記録",
      href: "/records",
      icon: <Memo />,
    },
    {
      id: 2,
      text: "体重グラフ",
      href: null,
      icon: <Challenge />,
    },
    {
      id: 3,
      text: "お知らせ",
      href: null,
      icon: <Info />,
    },
  ];
  const handleClick = (item: DropdownItem) => {
    if (item.href) {
      navigateTo(item.href);
    }
  };
  return (
    <HeaderRoot>
      <Container>
        <HeaderWrapper>
          <HeaderLogo onClick={() => navigateTo("/")}>
            <Logo />
          </HeaderLogo>
          <HeaderMenu>
            <HeaderNav>
              {navItems.map((item) => (
                <HeaderNavItem key={item.id} onClick={() => item.href && navigateTo(item.href)}>
                  <Memo />
                  <HeaderNavItemText active={item.href === currentPath}>{item.text}</HeaderNavItemText>
                </HeaderNavItem>
              ))}
            </HeaderNav>

            <Dropdown
              onClick={handleClick}
              element={
                <IconButton>
                  <Menu />
                </IconButton>
              }
              items={items}
            />
          </HeaderMenu>
        </HeaderWrapper>
      </Container>
    </HeaderRoot>
  );
}
