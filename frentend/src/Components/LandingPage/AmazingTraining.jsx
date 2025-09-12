import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AmazingTraining() {
  const navigate = useNavigate();
  const trainingData = [
    {
      title: "Summer Training (45-60 Days)",
      description: "DevPath offers you ... B.Tech(CS/IT), BCA, MCA students.",
      price: "3000",
      icon: <FaCode />,
      link: "/summer",
    },
    {
      title: "Winter Training (45 Days)",
      description: "DevPath offers you ... B.Tech(CS/IT), BCA, MCA students.",
      price: "4000",
      icon: <FaLaptopCode />,
      link: "/winter",
    },
  ];

  return (
    <section className="amazing-training my-5">
      <div className="container my-5">
        <div className="text-center mb-4">
          <h3 className="fw-bold text-warning">Amazing Training Programs</h3>
          <p className="text-muted">
            We are much appreciated in the field of Training as well. DevPath offers you the best development training via experienced consultants.
          </p>
        </div>

        <div className="row justify-content-center">
          {trainingData.map((program, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card shadow-sm h-100 position-relative training-card-hover"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(program.link)}
              >
                <div
                  className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center position-absolute"
                  style={{ width: "40px", height: "40px", top: "-20px", left: "20px" }}
                >
                  {program.icon}
                </div>

                <div className="card-body mt-4">
                  <h5 className="card-title fw-bold">{program.title}</h5>
                  <p className="card-text text-muted">{program.description}</p>
                  <p className="fw-bold">Course Price: {program.price}</p>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(program.link);
                    }}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AmazingTraining;
