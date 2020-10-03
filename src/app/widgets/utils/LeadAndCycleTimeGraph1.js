import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

export const LeadAndCycleTimeGraph1 = () => {

    const [dataSet, setDataSet] = useState({
        labels: [4, 5, 1, 10, 32, 2, 12],
        datasets: [
            {
                label: 'closed task',
                data: [4, 5, 1, 10, 0, 2, 12],
                fill: 'bottom'
            },
            {
                label: 'open task',
                data: [14, 15, 21, 20, 2, 14, 12],
                fill: '0'
            },
            {
                label: 'block task',
                data: [10, 12, 15, 4, 11, 8, 7],
            }
        ]
    })

    const setGradientColor = (canvas, i) => {
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0, 0, 122, 0)
        if (i === 0) {
            gradient.addColorStop(0, 'rgba(153, 36, 245, 0.12)')
            gradient.addColorStop(1, 'rgba(36, 202, 238, 0.12)')
        }
        if (i === 1) {
            gradient.addColorStop(0, 'rgba(8, 200, 108, 0.12)')
            gradient.addColorStop(1, 'rgba(185, 243, 60, 0.12)')
        }
        if (i === 2) {
            gradient.addColorStop(0, 'transparent')
            gradient.addColorStop(1, 'transparent')
        }
        return gradient
    }

    const setBorderGradient = (canvas, i) => {
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0, 0, 130, 0)
        if (i === 0) {
            gradient.addColorStop(0, '#9924F5')
            gradient.addColorStop(1, '#24CAEE')
        }
        if (i === 1) {
            gradient.addColorStop(0, '#08C86C')
            gradient.addColorStop(1, '#B9F33C')
        }
        if (i === 2) {
            gradient.addColorStop(0, '#FF1E54')
            gradient.addColorStop(1, '#F0138A')
        }
        return gradient
    }

    const getData = (canvas) => {
        const data = dataSet
        if (data.datasets) {
            data.datasets.map((set, i) => {
                if (i !== 2) {
                    set.backgroundColor = setGradientColor(canvas, i);
                    set.borderColor = setBorderGradient(canvas, i);
                    set.borderWidth = 1
                }
                if (i === 2) {
                    set.backgroundColor = setGradientColor(canvas, i);
                    set.borderColor = setBorderGradient(canvas, i);
                    set.borderWidth = 1
                }
            })
        }
        return data
    }

    return (
        <div>
            <Line
                data={getData}
                options={{
                    plugins: {
                        filler: {
                            propagate: true
                        }
                    },
                    responsive: true,
                    scales: {
                        yAxes: [{
                            display: false, ticks: {
                                padding: 100, min: -7
                            }
                        }],
                        xAxes: [{
                            display: false
                        }]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false,
                        custom: function (tooltip) {
                            if (!tooltip) return;
                        },
                        callbacks: {
                            label: function (tooltipItem, data) {
                                return "  " + tooltipItem.yLabel;
                            },
                            title: function (tooltipItem, data) {
                                return;
                            },
                        }
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    }
                }}

            />
        </div>
    )
}

export default LeadAndCycleTimeGraph1