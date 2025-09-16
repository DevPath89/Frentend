import React, { useEffect, useState } from "react";
import { FaUserTie, FaUserGraduate } from "react-icons/fa";

function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState(null);

  // Role icons mapping
  const roleIcons = {
    CEO: <FaUserTie className="me-1" />,
    CTO: <FaUserTie className="me-1" />,
    Developer: <FaUserGraduate className="me-1" />,
    Designer: <FaUserGraduate className="me-1" />,
  };

  // Fetch team members
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("https://devpath-2.onrender.com/api/ourteam/all");
        if (!res.ok) throw new Error("Failed to fetch team members");
        const data = await res.json();
        setTeamMembers(data);
      } catch (err) {
        console.error("Error fetching team members:", err);
        setError("Unable to load team members. Please try again later.");
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="container my-5">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Meet Our <span className="text-warning">Team</span>
        </h2>
        <p className="text-muted">
          The dedicated professionals behind DevPath Technology.
        </p>
      </div>

      {/* Error Handling */}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Team Cards */}
      <div className="row">
        {teamMembers.length === 0 && !error && (
          <p className="text-center">No team members added yet.</p>
        )}

        {teamMembers.map((member) => (
          <div key={member._id} className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm h-100 text-center">
              <img
                src={
                  member.image
                    ? `https://devpath-2.onrender.com/uploads/${member.image}`
                    : "https://via.placeholder.com/250x250?text=No+Image"
                }
                alt={member.name || "No Name"}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{member.name || "Unnamed"}</h5>
                <p className="text-muted">
                  {roleIcons[member.position] || <FaUserGraduate className="me-1" />}
                  {member.position || "Unknown Position"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
