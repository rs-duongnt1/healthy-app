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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
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

export function Chart() {
    return <Line className="chart-js" options={options} data={data} />;
}
