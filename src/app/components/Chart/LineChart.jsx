"use client";

// import from Next.js
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );

const LineChart = ({ historyCount }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 200 },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            y: { beginAtZero: true, min: 0,  max: 6, ticks: { stepSize: 1 } },
            x: { grid: { display: false } }
        }
    };

    const data = {
        labels: historyCount.map((_, index) => index + 1),
        datasets: [
            {
                label: "Safe",
                data: historyCount.map(item => item.safe),
                borderColor: "#4caf50",
                fill: false,
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: "#4caf50",
                spanGaps: true
            },
            {
                label: "Warning",
                data: historyCount.map(item => item.warning),
                borderColor: "#eab949",
                fill: false,
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: "#eab949",
                spanGaps: true
            },
            {
                label: "Dangerous",
                data: historyCount.map(item => item.dangerous),
                borderColor: "#f55555",
                fill: false,
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: "#f55555",
                spanGaps: true
            }
        ]
    };

    return (
        <div className = "w-full h-[16rem] max-md:h-[13rem]">
            {historyCount.length !== 0 && (<Line data = {data} options = {options}/>)}
        </div>
    );
};

export default LineChart;