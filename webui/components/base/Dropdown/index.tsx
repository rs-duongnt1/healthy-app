/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Close } from "@/assets/svg/close.svg";
import { DropdownButtonClose, DropdownContainer, DropdownItem, DropdownList, DropdownRoot } from "./styles";

export interface DropdownItem {
  id: number;
  text: string;
  href: string | null;
}
interface DropdownProps {
  items?: DropdownItem[];
  element: JSX.Element | JSX.Element[];
  onClick: (item: DropdownItem) => void;
}


export default function Dropdown({ element, items, onClick }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const handleClick = (item: DropdownItem) => {
    closeMenu();
    onClick(item);
  };
  return (
    <DropdownRoot>
      <div onClick={toggleMenu}>{element}</div>
      {open && (
        <DropdownContainer ref={dropdownRef}>
          <DropdownButtonClose onClick={closeMenu}>
            <Close />
          </DropdownButtonClose>
          <DropdownList>
            {items?.map((item) => (
              <DropdownItem key={item.id} onClick={() => handleClick(item)}>
                {item.text}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownContainer>
      )}
    </DropdownRoot>
  );
}
