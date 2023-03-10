import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from '@emotion/styled';
import Stack from '../Stack';

const ChartRoot = styled.div({
    position: 'relative',
    backgroundColor: '#2E2E2E',
    height: '100%',
    width: '100%',
})

const DateFilterRoot = styled.div({
    position: 'absolute',
    bottom: 16,
    left: 32,
    button: {
        backgroundColor: 'var(--white)',
        border: 'none',
        outline: 'none',
        color: '#FFCC21',
        fontWeight: 300,
        fontSize: 15,
        lineHeight: '22px',
        height: 24,
        width: 56,
        borderRadius: 11,
    }
})

const ChartTitle = styled.div({
    fontWeight: 400,
    fontSize: 15,
    lineHeight: '18px',
    color: 'var(--white)',
    position: 'absolute',
    top: 16,
    left: 24,
})

const ChartDate = styled.div({
    fontWeight: 400,
    fontSize: 22,
    lineHeight: '27px',
    color: 'var(--white)',
    position: 'absolute',
    top: 16,
    left: 120,
})

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    showScale: false,
    layout: {
        padding: {
            left: 60,
            right: 100,
            top: 10,
            bottom: 20,
        }
    },
    scales: {
        y: {
            display: false,
        },
        x: {
            border: {
                display: false,
            },
            grid: {
                color: '#777777',
            },

            ticks: {
                color: '#fff',
                beginAtZero: true,
                maxTicksLimit: 60,
                font: {
                    size: 12,
                    lineHeight: 3,
                }
            }
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        customCanvasBackgroundColor: {
            color: 'lightGreen',
        }
    },
};

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export const data = {
    labels,
    datasets: [
        {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7],
            borderColor: '#8FE9D0',
            backgroundColor: '#8FE9D0',
        },
        {
            data: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 6],
            borderColor: '#FFCC21',
            backgroundColor: '#FFCC21',
        },
    ],
};

interface ChartProps {
    options?: { [key: string]: any }
    withFilter?: boolean;
    withTitle?: boolean;
}

export function Chart({ options, withFilter, withTitle }: ChartProps = { options: {} }) {
    return <ChartRoot>
        <Line options={{ ...defaultOptions, ...options }} data={data} />
        {withFilter && <DateFilterRoot>
            <Stack spacing={16}>
                <button>日</button>
                <button>週</button>
                <button>月</button>
                <button>年</button>
            </Stack>
        </DateFilterRoot>}
        {withTitle && <ChartTitle>BODY <br /> RECORD</ChartTitle>}
        {withTitle && <ChartDate>2021.05.21</ChartDate>}
    </ChartRoot>;
}
