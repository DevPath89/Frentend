import { FaCode, FaCogs, FaLaptopCode, FaCloud } from "react-icons/fa";

function Services() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h3>
          <span className="text-primary fw-bold">DevPath</span>{" "}
          <span className="fw-bold">In IT & Web Solutions</span>
        </h3>
        <p className="text-muted">
          Our services are designed to empower businesses and individuals by providing
          top-notch IT solutions and training programs.
        </p>
      </div>

      {/* Content Row */}
      <div className="row align-items-center">
        {/* Left Side - Video */}
        <div className="col-md-6 mb-3">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/ysz5S6PUM-U" // yahan aap apna video link laga sakte ho
              title="DevPath Services"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Side - Services */}
        <div className="col-md-6">
          <div className="mb-4 d-flex">
            <div className="me-3 text-primary fs-3">
              <FaCode />
            </div>
            <div>
              <h5 className="fw-bold">Web Development & Design</h5>
              <p className="text-muted">
                We create responsive and interactive websites that help you grow your online presence.
              </p>
            </div>
          </div>

          <div className="mb-4 d-flex">
            <div className="me-3 text-primary fs-3">
              <FaCogs />
            </div>
            <div>
              <h5 className="fw-bold">Custom Software Solutions</h5>
              <p className="text-muted">
                Tailored software and ERP solutions to streamline business processes.
              </p>
            </div>
          </div>

          <div className="mb-4 d-flex">
            <div className="me-3 text-primary fs-3">
              <FaLaptopCode />
            </div>
            <div>
              <h5 className="fw-bold">Mobile App Development</h5>
              <p className="text-muted">
                Cross-platform mobile apps that provide excellent user experience and performance.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div className="me-3 text-primary fs-3">
              <FaCloud />
            </div>
            <div>
              <h5 className="fw-bold">Cloud & Hosting Services</h5>
              <p className="text-muted">
                Secure cloud hosting solutions to ensure your applications run smoothly and reliably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
