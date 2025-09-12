import React from "react";
import { FaCode, FaChalkboardTeacher } from "react-icons/fa";

function AboutUs() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        {/* Heading */}
        <h3 className="fw-bold">
          About Our <span className="text-warning">Company</span>
        </h3>
        <p className="text-muted mb-5">
          Join us on this journey of growth and exploration, where technology meets ambition.
        </p>

        {/* Row - Development & Training */}
        <div className="row justify-content-center mb-5">
          {/* DEVELOPMENT */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border-0 shadow-lg rounded-3 bg-white h-100">
              <div className="mb-3 text-warning fs-1">
                <FaCode />
              </div>
              <h5 className="fw-bold">DEVELOPMENT</h5>
              <h6 className="fw-semibold text-muted">Software & Website Development</h6>
              <p className="small text-muted">
                Crafting Dynamic Solutions in Software and Web Development Services
              </p>
            </div>
          </div>

          {/* TRAINING */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border-0 shadow-lg rounded-3 bg-white h-100">
              <div className="mb-3 text-warning fs-1">
                <FaChalkboardTeacher />
              </div>
              <h5 className="fw-bold">TRAINING</h5>
              <h6 className="fw-semibold text-muted">
                Technology Training & Educational Services
              </h6>
              <p className="small text-muted">
                Elevating Industries through Research, Analysis & Innovation Expertise
              </p>
            </div>
          </div>
        </div>

        {/* Video + Content Section */}
        <div className="row align-items-center text-start">
          {/* Video */}
          <div className="col-md-6 mb-4">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/your-video-id"
                title="Company Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Content */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">
              At DevPath, we are dedicated to advancing technology and empowering individuals.
            </h4>
            <p className="text-muted">
              DevPath Technology Private Limited, Established in 2018, stands as a pioneering
              force in the dynamic landscape of the IT sector.
            </p>
            <p className="text-muted">
              DevPath is founded by some young engineers who have mastered the IT sector with
              Objective to achieve the High Esteem Goals in the Sector across the Nation & Beyond.
            </p>
            <p className="text-muted">
              DevPath Technologies is an innovative organization specialized in both Software and
              Hardware Development and Training.
            </p>
            <p className="text-muted">
              DevPath has always been the best and most approved organisation for Summer &
              Industrial Training & Apprenticeship programs by Students of Entire region.
            </p>
            <p className="text-muted">
              With commitment to excellence, we strive to push the boundaries of what is possible in
              the digital realm by delivering high-quality software, robust hardware solutions, and
              comprehensive training programs that propel our clients and trainees towards
              unprecedented success.
            </p>

            {/* Button */}
            <button className="btn btn-outline-warning px-4 mt-3 fw-bold">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
