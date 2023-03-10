/// <reference types="vite-plugin-svgr/client" />

import styled from "@emotion/styled";
import { Chart } from "../components/Chart";
import Container from "../components/Container";
import Hex from "../components/Hex";
import { ReactComponent as Knife } from '../assets/svg/knife.svg';
import { ReactComponent as Cup } from '../assets/svg/cup.svg';
import ImageList from "../components/ImageList";
import Button from "../components/Button";
import Stack from "../components/Stack";

const HomeRoot = styled.div({
    // display: 'flex'
})

const HomeChartRoot = styled.div({
    flex: 1,

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
})

const HomeStatsRoot = styled.div({
    width: '540px',
    height: 312,
    minWidth: '540px',
    backgroundImage: 'url(/assets/images/d01.png)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const HomeStats = styled.div({
    width: 181,
    height: 181,
    border: '2px solid var(--white)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '.stats-date': {
        fontSize: 18,
        lineHeight: '22px',
        fontWeight: 400,
        color: 'var(--white)'
    },
    '.stats-percent': {
        fontSize: 25,
        lineHeight: '30px',
        fontWeight: 400,
        color: 'var(--white)',
        marginLeft: 4,
    },
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
            <HomeStatsRoot>
                <HomeStats>
                    <div>
                        <span className="stats-date">05/21</span>
                        <span className="stats-percent">75%</span>
                    </div>
                </HomeStats>
            </HomeStatsRoot>
            <HomeChartRoot>
                <Chart />
            </HomeChartRoot>
        </HomeTop>
        <Container>
            <Stack mt={25} mb={25}>
                <HexList>
                    {hexList.map(hex => (
                        <Hex key={hex.id} hex={hex}></Hex>
                    ))}

                </HexList>
            </Stack>
            <ImageList />
            <Stack justifyContent="center" mt={28}>
                <Button>記録をもっと見る</Button>
            </Stack>
        </Container>
    </HomeRoot>
}