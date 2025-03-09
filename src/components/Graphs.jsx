import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graphs = () => {
  const data = {
    labels: ["Project A", "Project B", "Project C"],
    datasets: [
      {
        label: "Success Rate (%)",
        data: [85, 90, 78],
        backgroundColor: ["#3B82F6", "#F59E0B", "#10B981"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Project Performance" },
    },
  };

  return (
    <section className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Project Performance 📊
      </h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default Graphs;

