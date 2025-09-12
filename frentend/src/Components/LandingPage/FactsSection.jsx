// src/Components/FactsSection.jsx
import React, { useEffect, useState } from "react";
import { FaUserGraduate, FaGraduationCap, FaBuilding, FaHandshake } from "react-icons/fa";

function FactsSection() {
  const [facts, setFacts] = useState({
    students: 0,
    placements: 0,
    topCompanies: 0,
    assistance: 0
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/facts") // ✅ backend se data la rahe
      .then(res => res.json())
      .then(data => setFacts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="facts-section py-5 bg-light">
      <div className="container text-center">
        {/* Heading */}
        <h3 className="fw-bold">
          Some <span className="text-warning">Facts</span>
        </h3>
        <p className="text-muted mb-5">
          DevPath excels in Placements with its dedicated Mentors. Trainees get a
          blend of mentorship, real-world exposure, and networking opportunities,
          equipping them for a successful career transition.
        </p>

        {/* Facts Row */}
        <div className="row">
          <div className="col-md-3 col-6 mb-4">
            <div className="p-4">
              <div className="text-warning fs-1 mb-2"><FaUserGraduate /></div>
              <h4 className="fw-bold">{facts.students}</h4>
              <p className="text-muted">Students taught so far</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="p-4">
              <div className="text-warning fs-1 mb-2"><FaGraduationCap /></div>
              <h4 className="fw-bold">{facts.placements}</h4>
              <p className="text-muted">Total Placements</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="p-4">
              <div className="text-warning fs-1 mb-2"><FaBuilding /></div>
              <h4 className="fw-bold">{facts.topCompanies}</h4>
              <p className="text-muted">Students placed in Top IT Company</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="p-4">
              <div className="text-warning fs-1 mb-2"><FaHandshake /></div>
              <h4 className="fw-bold">{facts.assistance}</h4>
              <p className="text-muted">Placement Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FactsSection;
