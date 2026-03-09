"use client";

// import from Next.js
import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ contentsItem }) => {
    const [centerText, setCenterText] = useState("");
    const hasData = contentsItem.some(item => item.status);
    const total = contentsItem.length;
    
    const counts = contentsItem.reduce((acc, item) => {
        if (item.status) acc[item.status] = (acc[item.status] || 0) + 1;
        return acc;
    }, {});

    const colors = [ '#4caf50', '#eab949', '#f55555' ];
    const data = {
        labels: [ 'Safe', 'Warning', 'Dangerous' ],
        datasets: [{
            label: 'Device Status',
            data: hasData ? [ counts['safe'] || 0, counts['warning'] || 0, counts['dangerous'] || 0 ] : [1],
            backgroundColor: hasData ? colors : ['#ececec'],
            hoverBackgroundColor: hasData ? colors : ['#ececec'],
            borderWidth: 0,
            cutout: '72%'
        }]
    };

    const handleElements = (elements) => {
        if (elements.length > 0) {
            const index = elements[0].index;
            const value = data.datasets[0].data[index];
            const percentage = Math.round((value / total) * 100);
            setCenterText(`${percentage}%`);
        } else {
            setCenterText(""); 
        }
    };

    const options = {
        responsive: true,
        layout: { padding: 20 },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        maintainAspectRatio: false,
        onHover: (event, chartElement) => { handleElements(chartElement); },
        onClick: (event, chartElement) => { handleElements(chartElement); }
    };

    return (
        <div className = "relative w-64 max-xxs:w-52 h-64 max-xxs:h-52 mx-auto cursor-pointer">
            <Doughnut data = {data} options = {options}/>
            <div className = "absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className = {`text-lg font-bold text-[#171717] ${centerText ? "opacity-100" : "opacity-0"} transition-all duration-200`}>
                    {hasData && centerText}
                </span>
            </div>
        </div>
    );
};

export default DoughnutChart;