import React from "react";
import { useNavigate } from "react-router-dom";

function PricingSection() {
  const navigate = useNavigate();

  // 🔹 Pricing Plans Data
  const plans = [
    {
      title: "SUMMER TRAINING",
      price: "Rs. 3000/-",
      features: [
        "✔ 5 Hour Daily Classes",
        "✔ Recovery Class For Each Session",
        "✔ Study Material Of Each Language",
        "✔ Free Access Of Online Portal For 1 Year",
        "✔ Free Web Servers",
        "✔ Project File According To Project",
      ],
      path: "/register",
    },
    {
      title: "WINTER TRAINING",
      price: "Rs. 4000/-",
      features: [
        "✔ 5 Hour Daily Classes",
        "✔ Recovery Class For Each Session",
        "✔ Study Material Of Each Language",
        "✔ Free Access Of Online Portal For 1 Year",
        "✔ Free Web Servers",
        "✔ Project File According To Project",
      ],
      path: "/register",
    },
  ];

  return (
    <section className="pricing-section my-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h3>
            Plan & <span className="text-warning">Pricing</span>
          </h3>
          <p className="text-muted">
            Unlock professional growth with our diverse training programs, flexible plans, and expert support.
          </p>
        </div>

        {/* Dynamic Cards */}
        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div className="col-md-5 mb-4" key={index}>
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body text-center">
                  <h4 className="fw-bold">{plan.title}</h4>
                  <h3 className="text-warning fw-bold">{plan.price}</h3>
                  <ul className="list-unstyled mt-3 mb-4 text-start">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-warning text-white fw-bold"
                    onClick={() => navigate(plan.path)}
                  >
                    ENROLL NOW
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

export default PricingSection;
