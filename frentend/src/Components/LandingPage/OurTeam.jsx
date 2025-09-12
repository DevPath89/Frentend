import React, { useEffect, useState } from "react";
import { FaUserTie, FaUserGraduate } from "react-icons/fa";

function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch team members from backend
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/ourteam/all");
        const data = await res.json();
        setTeamMembers(data); // backend se array of team members
      } catch (err) {
        console.error("Error fetching team members:", err);
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

      {/* Team Cards */}
      <div className="row">
        {teamMembers.map((member) => (
          <div key={member._id} className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm h-100 text-center">
              <img
                src={`http://localhost:5000/uploads/${member.image}`}
                alt={member.name}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{member.name}</h5>
                <p className="text-muted">
                  {member.position === "CEO" || member.position === "CTO" ? (
                    <FaUserTie className="me-1" />
                  ) : (
                    <FaUserGraduate className="me-1" />
                  )}
                  {member.position}
                </p>
              </div>
            </div>
          </div>
        ))}
        {teamMembers.length === 0 && (
          <p className="text-center">No team members added yet.</p>
        )}
      </div>
    </div>
  );
}

export default OurTeam;
