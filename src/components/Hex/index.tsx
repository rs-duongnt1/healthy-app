/// <reference types="vite-plugin-svgr/client" />

import styled from "@emotion/styled"
import { ReactComponent as HexBox } from '../../assets/svg/hex.svg';
import { ReactComponent as Knife } from '../../assets/svg/knife.svg';
const HexRoot = styled.div({
    position: 'relative',
    width: 116,
    height: 134,
})
const HexBoxIcon = styled.div({
    position: 'absolute',
    top: 27,
    left: 30,
})
const HexBoxText = styled.div({
    position: 'absolute',
    bottom: 27,
    left: 0,
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: '24px',
    color: '#fff'
})

interface HexProps {
    hex: {
        id: number;
        text: string;
        icon: JSX.Element;
    }
}

export default function Hex({ hex }: HexProps) {
    return <HexRoot>

        <HexBoxIcon>
            {hex.icon}
        </HexBoxIcon>
        <HexBoxText>{hex.text}</HexBoxText>
        <HexBox />
    </HexRoot>
}