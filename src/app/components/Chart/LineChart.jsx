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
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                titleFont: { size: 14 },
                bodyFont: { size: 14 },
                callbacks: {
                    label: (context) => ` Current: ${context.parsed.y.toFixed(2)} A`
                }
            }
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
        },
    };

    const data = {
        labels: contentsItem.map((_, index) => index + 1),
        datasets: [
            {
                label: "Current (A)",
                data: contentsItem.map(item => parseFloat(item.value) || 0),
                borderColor: "#eab949",
                backgroundColor: "rgba(234, 185, 73, 0.1)",
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: "#eab949",
            },
        ],
    };

    return (
        <div className="w-full h-full min-h-[300px]">
            <Line data = {data} options = {options} />
        </div>
    );
};

export default LineChart;