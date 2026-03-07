"use client";

// import from Next.js
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );

const LineChart = ({ contentsItem }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0, 
                max: 14,
                grid: { color: "#ececec" },
                ticks: { font: { size: 12 } }
            },
            x: {
                grid: { display: false },
                ticks: { font: { size: 12 } }
            }
        }
    };

    const data = {
        labels: contentsItem.map((_, index) => index + 1),
        datasets: [
            {
                label: "Safe",
                data: contentsItem.map(item => item.status === 'safe' ? parseFloat(item.value) : null),
                borderColor: "#4caf50",
                backgroundColor: "rgba(76, 175, 80, 0.1)",
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: "#4caf50",
                spanGaps: true
            },
            {
                label: "Warning",
                data: contentsItem.map(item => item.status === 'warning' ? parseFloat(item.value) : null),
                borderColor: "#eab949",
                backgroundColor: "rgba(234, 185, 73, 0.1)",
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: "#eab949",
                spanGaps: true
            },
            {
                label: "Dangerous",
                data: contentsItem.map(item => item.status === 'dangerous' ? parseFloat(item.value) : null),
                borderColor: "#f55555",
                backgroundColor: "rgba(245, 85, 85, 0.1)",
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: "#f55555",
                spanGaps: true
            }
        ]
    };

    return (
        <div className="w-full h-full min-h-[300px]">
            <Line data = {data} options = {options} />
        </div>
    );
};

export default LineChart;