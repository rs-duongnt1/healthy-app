/// <reference types="vite-plugin-svgr/client" />
import styled from "@emotion/styled"
import { useEffect, useRef, useState } from "react"
import { ReactComponent as Close } from '../../assets/svg/close.svg';

interface DropdownProps {
    items?: { id: number; text: string }[]
    element: JSX.Element | JSX.Element[]
}

const DropdownRoot = styled.div({
    position: 'relative',
})

const DropdownContainer = styled.div({
    position: 'absolute',
    backgroundColor: '#777777',
    zIndex: 1000,
    left: 0,
    top: 40,

})

const DropdownList = styled.div({
    width: 280,
})


const DropdownItem = styled.div({
    height: 72,
    padding: '23px 32px',
    fontWeight: 300,
    fontSize: 18,
    lineHeight: '26px',
    color: 'var(--white)',
    borderBottom: '1px solid #8B8B8B',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'color .15s',
    ":hover": {
        color: 'var(--primary)'
    }
})

const DropdownButtonClose = styled.div({
    position: 'absolute',
    right: 0,
    top: '-32px',
    width: 32,
    height: 32,
    backgroundColor: 'var(--secondary)',
    cursor: 'pointer'
})

export default function Dropdown({ element, items }: DropdownProps) {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const toggleMenu = () => {
        setOpen(!open)
    }


    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            closeMenu()
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
    }, [])

    const closeMenu = () => {
        setOpen(false)
    }
    return <DropdownRoot>
        <div onClick={toggleMenu}>{element}</div>
        {open && <DropdownContainer ref={dropdownRef}>
            <DropdownButtonClose onClick={closeMenu}>
                <Close />
            </DropdownButtonClose>
            <DropdownList>
                {items?.map((item) => (
                    <DropdownItem key={item.id}>{item.text}</DropdownItem>
                ))}
            </DropdownList>
        </DropdownContainer>}

    </DropdownRoot>
}