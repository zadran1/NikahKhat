"use client";
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

function ChartComponent() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: [
        "حمل",
        "ثور",
        "جوزا",
        "سرطان",
        "اسد",
        "سنبله",
        "میزان",
        "عقرب",
        "قوس",
        "جدي",
        "دلو",
        "حوت",
      ],
      datasets: [
        {
          label: "ګراف",
          data: [65, 59, 80, 81, 100, 60, 90, 66, 57, 50, 70, 60],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
        /* {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          tension: 0.4,
        },  */
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <div className="container mx-auto chart-container border border-black rounded-lg m-2 bg-white font-sans">
      <h1 className="text-right mt-2 mr-2 font-bold">د غوښتنلیکونو ټرینډ</h1>

      {/* Your chart content here */}
      <div className="card">
        <select className="mt-2">
          <option>تیر کال</option>
        </select>
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default ChartComponent;
