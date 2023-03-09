/// <reference types="vite-plugin-svgr/client" />

import styled from "@emotion/styled";
import { Chart } from "../components/Chart";
import Container from "../components/Container";
import Hex from "../components/Hex";
import { ReactComponent as Knife } from '../assets/svg/knife.svg';
import { ReactComponent as Cup } from '../assets/svg/cup.svg';
import ImageList from "../components/ImageList";

const HomeRoot = styled.div({
    // display: 'flex'
})

const HomeChartRoot = styled.div({
    flex: 1,
    backgroundColor: '#2E2E2E',
    paddingLeft: 60,
    paddingRight: 100,
    paddingTop: 10,
    paddingBottom: 20,
})

const HomeTop = styled.div({
    display: 'flex',

})

const HexList = styled.div({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridGap: '84px',
    width: '100%',
    justifyContent: 'center',
    margin: '25px 0',
})

export default function Home() {
    const hexList = [
        {
            id: 1,
            icon: <Knife />,
            text: 'Morning'
        },
        {
            id: 2,
            icon: <Knife />,
            text: 'Lunch',
        },
        {
            id: 3,
            icon: <Knife />,
            text: 'Dinner'
        },
        {
            id: 4,
            icon: <Cup />,
            text: 'Snack'
        }
    ]
    return <HomeRoot>
        <HomeTop>
            <img src="/assets/images/d01.png" width="540px" />
            <HomeChartRoot>
                <Chart />
            </HomeChartRoot>
        </HomeTop>
        <Container>
            <HexList>
                {hexList.map(hex => (
                    <Hex key={hex.id} hex={hex}></Hex>
                ))}

            </HexList>
            {/* <ImageList /> */}
        </Container>
    </HomeRoot>
}