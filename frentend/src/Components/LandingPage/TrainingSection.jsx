import React from "react";

function TrainingSection() {
  // 🔹 Training Data (3 items)
  const trainings = [
    { title: "Summer Training", color: "border-info", path: "/summer-training" },
    { title: "Winter Training", color: "border-warning", path: "/winter-training" },
    { title: "Industrial Training", color: "border-success", path: "/industrial-training" },
  ];

  return (
    <section className="training-section my-5 text-center">
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold mb-4">
          <span style={{ color: "#ff6600" }}>Training At </span>DevPath Technology
        </h2>

        {/* Responsive Grid */}
        <div className="row g-2 justify-content-center">
          {trainings.map((training, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className={`training-card border-top ${training.color} shadow-sm py-3 px-2`}
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  transition: "0.3s",
                }}
                onClick={() => (window.location.href = training.path)}
              >
                <h5 className="fw-bold m-0">{training.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingSection;
