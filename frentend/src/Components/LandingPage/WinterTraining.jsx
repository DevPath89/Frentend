import React from "react";
import { FaLaptopCode, FaCogs, FaProjectDiagram } from "react-icons/fa";

function WinterTraining() {
  const sessions = [
    {
      title: "Basic Session",
      icon: <FaLaptopCode className="fs-1 text-warning mb-2" />,
      content: [
        "HTML-5, CSS-3",
        "Bootstrap",
        "C Programming",
        "JavaScript",
        "jQuery",
        "Database (SQL)"
      ]
    },
    {
      title: "Technology Session",
      icon: <FaCogs className="fs-1 text-warning mb-2" />,
      content: [
        "Python with Django",
        "PHP with CI/Laravel",
        ".Net with MVC",
        "Android with Java",
        "Java with Hibernate/Spring",
        "MERN Stack"
      ]
    },
    {
      title: "Project Session",
      icon: <FaProjectDiagram className="fs-1 text-warning mb-2" />,
      content: [
        "A major project with minimum 20 modules based on advanced real-time problems like:",
        "Online Education",
        "Online Services",
        "Online Shopping, etc."
      ]
    },
  ];

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="bg-success text-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold">Winter Training Program</h1>
          <p className="lead">
            DevPath Technology offers 45 days intensive winter training for B.Tech, BCA, MCA students.
          </p>
          <button className="btn btn-dark mt-3">Enroll Now</button>
        </div>
      </section>

      {/* ===== Program Overview ===== */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Program Overview</h2>
          <p className="text-muted text-center">
            The Winter Training program is designed to enhance the technical knowledge of students in web development, software development, and modern IT technologies. Hands-on projects and guidance from experienced mentors ensure practical learning.
          </p>
        </div>
      </section>

      {/* ===== Offered Languages & Technology Section ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Offered Languages and Technology Of DevPath Winter Training</h2>
          <div className="row">
            {sessions.map((session, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-sm h-100 p-3 text-center">
                  {session.icon}
                  <h5 className="fw-bold">{session.title}</h5>
                  <ul className="list-unstyled mt-3 text-start">
                    {session.content.map((item, i) => (
                      <li key={i}>✔ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Registration Call-to-Action ===== */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-3">Join Our Winter Training Program</h2>
          <p className="text-muted mb-4">
            Enhance your skills and get hands-on experience in modern IT technologies.
          </p>
          <button
            className="btn btn-warning btn-lg"
            onClick={() => window.location.href = "/register"}
          >
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default WinterTraining;
