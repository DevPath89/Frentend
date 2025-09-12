import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/reports/all"); // backend API
        const data = await res.json();
        setReports(data); // assume backend sends array of reports
      } catch (err) {
        console.error(err);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Reports & Analytics</h1>
        <p>Here you can view all reports and analytics data.</p>

        {/* Quick Stats Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Reports</h3>
            <p>{reports.length}</p>
          </div>
        </div>

        {/* Reports Table */}
        <div className="table-responsive">
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={report._id || index}>
                  <td>{index + 1}</td>
                  <td>{report.title}</td>
                  <td>{report.description}</td>
                  <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;
