"use client";

import { Header } from "@/components/Header";
import { IncomeExpence } from "@/components/Dashboard/IncomeExpence";
import { LastRecords } from "@/components/Dashboard/LastRecords";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, registerables } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export const Dashboard = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "My Dataset",
        data: [300, 50, 100, 150],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2, // Add border width for arc elements
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };
  return (
    <main className=" ">
      <div className="w-screen flex flex-col justify-center items-center ">
        <Header />
      </div>
      <div className="w-screen flex flex-col  items-center h-screen bg-[#F3F4F6] pt-[32px] gap-6">
        <IncomeExpence />
        <div>
          <Doughnut data={data} options={options} />
        </div>
        <LastRecords />
      </div>
    </main>
  );
};
