"use client";

// import from Next.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ historyCount }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 200 },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            y: { stacked: false, beginAtZero: true, min: 0, max: 6, ticks: { stepSize: 1 } },
            x: { stacked: false, grid: { display: false } }
        },
        categoryPercentage: 0.8,
        barPercentage: 0.9
    };

    const data = {
        labels: historyCount.map((_, index) => index + 1),
        datasets: [
            {
                label: "Safe",
                data: historyCount.map(item => item.safe),
                backgroundColor: "#4caf50",
                borderRadius: 2,
            },
            {
                label: "Warning",
                data: historyCount.map(item => item.warning),
                backgroundColor: "#eab949",
                borderRadius: 2,
            },
            {
                label: "Dangerous",
                data: historyCount.map(item => item.dangerous),
                backgroundColor: "#f55555",
                borderRadius: 2,
            }
        ]
    };

    return (
        <div className = "w-full h-full">
            <Bar data = {data} options = {options} />
        </div>
    );
};

export default BarChart;