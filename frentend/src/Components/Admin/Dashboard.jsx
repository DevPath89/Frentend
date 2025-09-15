import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [reportCount, setReportCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    fetch("https://devpath-2.onrender.com/api/users/count")
      .then(res => res.json())
      .then(data => setUserCount(data.count))
      .catch(err => console.error(err));

    fetch("https://devpath-2.onrender.com/api/reports/count")
      .then(res => res.json())
      .then(data => setReportCount(data.count))
      .catch(err => console.error(err));

    fetch("https://devpath-2.onrender.com/api/team/count")
      .then(res => res.json())
      .then(data => setTeamCount(data.count))
      .catch(err => console.error(err));
  }, []);

  const chartData = {
    labels: ["Users", "Reports", "Team Members"],
    datasets: [
      {
        label: "Count",
        data: [userCount, reportCount, teamCount],
        backgroundColor: ["#007bff", "#28a745", "#ffc107"]
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // ✅ scroll ko avoid karega
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Platform Statistics" }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      {/* Properly offset the content from sidebar */}
      <div style={{ flex: 1, padding: "20px", marginLeft: "220px" }}>
        <h1 className="mb-4">Welcome to Admin Dashboard</h1>

        {/* Quick Stats Cards */}
        <div className="d-flex gap-3 mb-4 flex-wrap">
          <div style={cardStyle}>
            <h3>Registered Users</h3>
            <p>{userCount}</p>
          </div>
          <div style={cardStyle}>
            <h3>Reports</h3>
            <p>{reportCount}</p>
          </div>
          <div style={cardStyle}>
            <h3>Our Team Members</h3>
            <p>{teamCount}</p>
          </div>
        </div>

        {/* Bar Chart (smaller size, no horizontal scroll) */}
        <div style={{ width: "100%", maxWidth: "600px", height: "300px", marginTop: "30px" }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

// Card style
const cardStyle = {
  flex: "1 1 200px",
  padding: "20px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  textAlign: "center"
};

export default Dashboard;
