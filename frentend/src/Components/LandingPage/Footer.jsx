import React from "react";

function Footer() {
  const about = {
    title: "DevPath Technology",
    description:
      "DevPath is a leading IT training & solutions provider offering Summer/Winter training, development services and career guidance to help students and businesses excel.",
    socials: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-linkedin-in", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
    ],
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const trainings = [
    { name: "Summer Training", path: "/summer-training" },
    { name: "Winter Training", path: "/winter-training" },
    { name: "Enroll Now", path: "/register" },
  ];

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      text: "123, Lucknow, UP, India",
    },
    { icon: "fas fa-phone", text: "+91 98765 43210" },
    { icon: "fas fa-envelope", text: "support@devpath.com" },
  ];

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-warning">{about.title}</h5>
            <p className="text-light">{about.description}</p>
            <div className="d-flex gap-3">
              {about.socials.map((s, i) => (
                <a key={i} href={s.link} className="text-light">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.path} className="text-light text-decoration-none">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-warning">Training</h5>
            <ul className="list-unstyled">
              {trainings.map((t, i) => (
                <li key={i}>
                  <a href={t.path} className="text-light text-decoration-none">
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-warning">Contact Info</h5>
            {contactInfo.map((c, i) => (
              <p key={i}>
                <i className={`${c.icon} text-warning me-2`}></i>
                {c.text}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center border-top pt-3 mt-3">
          <p className="mb-0 text-light">
            © {new Date().getFullYear()} DevPath Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
