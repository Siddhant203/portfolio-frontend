import "./App.css";
import Navbar from "./component/Navbar.jsx";
import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import instagramIcon from "./assets/Instagram.svg";
import emailIcon from "./assets/email.svg";
import myImg1 from "./assets/MyImg2.png";
import carRentalImg from "./assets/car-rental.png";
import idCardImg from "./assets/Id_Card.png";
import portfolioImg from "./assets/portfolio.png";
import myResume from "./assets/resume.pdf";
import { useState, useEffecct } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {

  useEffecct(() =>{
    fetch(`${API_BASE_URL}/api/projects`).catch(()=>{});
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setStatus({
      type: "",
      message: "",
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();

      if (!response.ok) {
        throw new Error(result || "Something went wrong!");
      }
      setStatus({
        type: "success",
        message: result,
      });

      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 4000);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Form Error", error);

      setStatus({
        type: "danger",
        message: "Message could not be sent. Please try again.",
      });

      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="portfolio">
      <Navbar />

      <main id="home" className="hero container-fluid">
        <p className="greeting">Hello I'M</p>
        <h1>Siddhant kumar</h1>
        <h2>Full Stack Developer</h2>

        <p className="intro">
          I build a modern web application using Java, Spring Boot, React and
          MySQL.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-secondary m-2">
            Visit My Work
          </a>
          <a href="#contact" className="btn btn-secondary m-2">
            Contact Me
          </a>
          <a
            href={myResume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary m-2"
          >
            <i className="bi bi-file-earmark-arrow-down me-1"></i>Resume
          </a>
        </div>
        <div className="icon">
          <a
            href="https://github.com/Siddhant203"
            className="icon-btn m-2"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="" />
          </a>
          <a
            href="https://linkedin.com/in/siddhant-kumar-64324b319"
            className="icon-btn m-2"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="" />
          </a>
          <a
            href="mailto:siddhant.mk2004@gmail.com"
            className="icon-btn m-2"
            aria-label="Email"
          >
            <img src={emailIcon} alt="" />
          </a>
        </div>
      </main>
      {/* Skills Section */}
      <div className="container-fluid mt-5">
        <div className="row g-4">
          <section
            id="about"
            className="about-section col-12 col-md-6 col-lg-6"
          >
            <div className="container">
              <div className="row align-items-center g-5">
                {/* About content */}
                <div className="col-12 col-md-5">
                  <h2 className="section-label">___About Me</h2>
                  <h3>I'm a Full Stack Developer</h3>

                  <p>
                    My development interests include Java, Spring Boot, React,
                    and MySQL. I'm continuously learning new technologies and
                    improving my problem-solving skills to grow as a developer.
                  </p>

                  <p>
                    I continuously explore new technologies and improve my
                    problem-solving and development skills.
                  </p>
                </div>
                {/* About image */}
                <div className="col-12 col-md-7">
                  <div className="about-image">
                    <img src={myImg1} alt="About Me" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="skills-section col-12 col-md-6">
            <div className="skill-heading">
              <h2 className="section-label">___My Skills</h2>
              <h2>Technologies I Work With</h2>
            </div>
            <div className="container-fluid text-center">
              <div className="row g-4">
                <div className="grid skill-card">
                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                      alt="Java"
                    />
                    <span>Java</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                      alt="Spring Boot"
                    />
                    <span>Spring Boot</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                    />
                    <span>React</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                    />
                    <span>JavaScript</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML5"
                    />
                    <span>HTML5</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      alt="CSS3"
                    />
                    <span>CSS3</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                    />
                    <span>Node.js</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                      alt="MySQL"
                    />
                    <span>MySQL</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      alt="Git"
                    />
                    <span>Git</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://www.svgrepo.com/show/452183/cpp.svg"
                      alt="C++"
                    />
                    <span>C++</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                      alt="Bootstrap"
                    />
                    <span>Bootstrap</span>
                  </div>

                  <div className="technology-card">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                      alt="PHP"
                    />
                    <span>PHP</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Education Section */}
      <section
          id="education"
          className="education-section container-fluid py-5"
        >
          <div className="container-fluid mb-4 text-start">
            <h2 className="section-label">___My Journey</h2>
            <h2>Experience & Education</h2>
          </div>
          <div className="row g-4">
            {/* Left Column: Experience / Internships */}
            <div className="col-12 col-lg-6">
              <h3 className="journey-column-title">
                <i className="bi bi-briefcase me-2"></i>Internship Experience
              </h3>
              
              <div className="d-flex flex-column gap-4 mt-3">
                {/* Internship 1 */}
                <div className="education-card">
                  <span className="education-year">Internship</span>
                  <h3>Web Development Intern</h3>
                  <h4>LifeTech Software Solution</h4>
                  <p className="journey-desc">
                    Trained in full-stack web development using HTML, CSS, JavaScript, PHP, and MySQL with XAMPP/Apache server. Developed the Road Squad car rental portal.
                  </p>
                  <div className="project-tech">
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>JavaScript</span>
                    <span>XAMPP</span>
                  </div>
                </div>
                {/* Internship 2 */}
                <div className="education-card">
                  <span className="education-year">Virtual Internship</span>
                  <h3>Web Development Intern</h3>
                  <h4>Acmegrade</h4>
                  <p className="journey-desc">
                    Gained in-depth knowledge of frontend and backend web fundamentals, modern workflows, and e-commerce web application architecture.
                  </p>
                  <div className="project-tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>E-Commerce</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Education */}
            <div className="col-12 col-lg-6">
              <h3 className="journey-column-title">
                <i className="bi bi-mortarboard me-2"></i>Academic Education
              </h3>
              <div className="d-flex flex-column gap-4 mt-3">
                {/* MCA */}
                <div className="education-card">
                  <span className="education-year">Currently Pursuing</span>
                  <h3>Master of Computer Applications (MCA)</h3>
                  <h4>Chandigarh University</h4>
                  <span>Online Programme</span>
                </div>
                {/* B.Sc CA */}
                <div className="education-card">
                  <span className="education-year">Completed</span>
                  <h3>Bachelor of Science in Computer Applications</h3>
                  <h4>Dr. Shyama Prasad Mukherjee University</h4>
                  <span>Ranchi, Jharkhand</span>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* project section */}
      <section id="projects" className="projects container-fluid py-5">
        <div className="text-start mb-3">
          <h2 className="section-label"> ___My Projects</h2>
          <p>Some of the projects I have worked on</p>
        </div>
        <div className="row g-4">
          {/* project 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="project-card">
              <h3>Road Squad</h3>
              <img src={carRentalImg} alt="Road Squad" />
              <p>A car rental website that allows users to rent cars online.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Siddhant203/Car_Rental_Website"
                  className="btn btn-secondary m-2"
                >
                  Github Repo
                </a>
                {/* <a href="#" className="btn btn-secondary m-2">
                    Live
                  </a> */}
              </div>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
          {/* project 2 */}
          <div className="col-12 col-md-6 col-lg-4 ">
            <div className="project-card">
              <h3>PDF ID Card Extractor</h3>
              <img src={idCardImg} alt="PDF ID Card Extractor" />
              <p>
                A web application that extracts ID card images from PDF files
                for printing.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Siddhant203/id-card-saas"
                  className="btn btn-secondary m-2"
                >
                  Github Repo
                </a>
                <a
                  href="https://id-card-saas.onrender.com/"
                  className="btn btn-secondary m-2"
                >
                  Live
                </a>
              </div>
              <div className="project-tech flex inline-block m-2">
                <span>Python</span>
                <span>AI</span>
              </div>
            </div>
          </div>
          {/* project 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="project-card">
              <h3>Personal Portfolio</h3>
              <img src={portfolioImg} alt="Personal Portfolio" />
              <p>
                A personal portfolio website showcasing my skills, projects and
                experience.
              </p>
              <div className="project-links">
                <a href="#" className="btn btn-secondary m-2">
                  Github Repo
                </a>
                {/* <a href="#" className="btn btn-secondary m-2">
                    Live
                  </a> */}
              </div>
              <div className="project-tech flex inline-block m-2">
                <span>React</span>
                <span>CSS/Bootstrap</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service section */}
      <section id="services" className="services-section container-fluid py-5">
          <div className="texr-start">
            <h2 className="section-label">___My Services</h2>
            <h2>What I Can Do For You</h2>
            <p className="services-subtitle">
              Offering full-stack web solutions tailored to modern business and
              user needs.
            </p>
          </div>

          <div className="row g-4">
            {/* section 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h3>Full Stack Development</h3>
                <p>
                  End-to-end web application development using Java, Spring
                  Boot, React, and MySQL. Secure, scalable, and maintainable
                  architectures.
                </p>
                <div className="service-tags">
                  <span>React</span>
                  <span>Spring Boot</span>
                  <span>APIs</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
            {/* section 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h3>Responsive Web Design</h3>
                <p>
                  Crafting modern, pixel-perfect, and mobile-friendly user
                  interfaces that look great and load fast across all devices
                  and screen sizes.
                </p>
                <div className="service-tags">
                  <span>HTML5 / CSS3</span>
                  <span>Bootstrap</span>
                  <span>Mobile-First</span>
                  <span>UI/UX</span>
                </div>
              </div>
            </div>

            {/* section 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h3>Bug Fixing</h3>
                <p>
                  Troubleshooting issues, refactoring existing code, and
                  optimizing database queries for high performance.
                </p>
                <div className="service-tags">
                  <span>Debugging</span>
                  <span>Query Optimization</span>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* contact section */}
      <section id="contact" className="contact-section container-fluid py-5">
        <div className="container-fluid">
          <div className="contact-heading">
            <h2 className="section-label">___Contact Me</h2>
            <h3>Let's Work Together</h3>
            <p>Have a project or opportunity? Feel free to reach out.</p>
          </div>
        </div>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-10 col-md-5">
            <div className="contact-info">
              <h3>Get in Touch</h3>

              <p>
                I am open to discussing new projects, development opportunities
                and collaborations.
              </p>
            </div>
            <div className="contact-item">
              <i className="bi bi-envelope"></i>
              <span> siddhant.mk2004@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="bi bi-geo-alt"></i>
              <span> India</span>
            </div>
          </div>

          <div className="col-10 col-md-5">
            <div className="contact-form">
              {status.message && (
                <div className={`alert alert-${status.type}`} role="alert">
                  {status.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Your Email"
                  required
                  maxLength={150}
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control mb-3"
                  placeholder="Subject"
                  required
                  maxLength={150}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control mb-3"
                  rows="5"
                  placeholder="Your Message"
                  required
                  maxLength={2000}
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="bi bi-send ms-2"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section container-fluid">
        <div className="container">
          <div className="footer-content">
            <h2>Siddhant kumar</h2>
            <p>Full Stack Developer</p>
            <p>
              Build modern web experiences with Java, Spring Boot and React.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/Siddhant203"
                className="footer-btn m-2"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="" />
              </a>
              <a
                href="https://linkedin.com/in/siddhant-kumar-64324b319"
                className="footer-btn m-2"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="" />
              </a>
              <a href="#" className="footer-btn m-2" aria-label="Instagram">
                <img src={instagramIcon} alt="" />
              </a>
              <a
                href="mailto:siddhant.mk2004@gmail.com"
                className="footer-btn m-2"
                aria-label="Email"
              >
                <img src={emailIcon} alt="" />
              </a>
            </div>
            <br />
            <br />
            <div className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
            <hr />
            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} Siddhant kumar. All Rights
                Reserved.
              </p>
              <a href="#home" className="back-to-top">
                Back to Top <i className="bi bi-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
