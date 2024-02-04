import React from "react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import {
  FaBirthdayCake,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaPhoneSquare,
  FaPhp,
  FaPython,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiAdobexd, SiFirebase, SiMysql } from "react-icons/si";
import { TbApi, TbBrandJavascript } from "react-icons/tb";
import TopBar2 from "../NavBar/TopBar2";
import style from "./about.module.css";

function About() {
  const data = [
    {
      id: 1,
      title: "HTML",
      value: 100,
      icon: <FaHtml5 size={30} />,
    },
    {
      id: 2,
      title: "CSS",
      value: 90,
      icon: <FaCss3Alt size={30} />,
    },
    {
      id: 3,
      title: "Bootstrap",
      value: 90,
      icon: <FaBootstrap size={30} />,
    },
    {
      id: 4,
      title: "JavaScript",
      value: 80,
      icon: <TbBrandJavascript size={30} />,
    },
    {
      id: 5,
      title: "Jquery",
      value: 70,
      icon: <DiJqueryLogo size={30} />,
    },
    {
      id: 6,
      title: "React",
      value: 70,
      icon: <FaReact size={30} />,
    },
    {
      id: 7,
      title: "React Native",
      value: 60,
      icon: <FaReact size={30} />,
    },
    {
      id: 8,
      title: "Java",
      value: 70,
      icon: <FaJava size={30} />,
    },
    {
      id: 9,
      title: "Spring Boot",
      value: 60,
      icon: <BiLogoSpringBoot size={30} />,
    },
    {
      id: 10,
      title: "PHP",
      value: 80,
      icon: <FaPhp size={30} />,
    },
    {
      id: 11,
      title: "Laravel",
      value: 70,
      icon: <FaLaravel size={30} />,
    },
    {
      id: 12,
      title: "MySQL",
      value: 80,
      icon: <SiMysql size={30} />,
    },
    {
      id: 13,
      title: "Firebase",
      value: 70,
      icon: <SiFirebase size={30} />,
    },
    {
      id: 14,
      title: "Relational Database",
      value: 80,
      icon: <FaDatabase size={30} />,
    },
    {
      id: 15,
      title: "API",
      value: 80,
      icon: <TbApi size={30} />,
    },
    {
      id: 16,
      title: "Git",
      value: 80,
      icon: <FaGit size={30} />,
    },
    {
      id: 17,
      title: "Python",
      value: 70,
      icon: <FaPython size={30} />,
    },
    {
      id: 18,
      title: "AJAX",
      value: 70,
      icon: null,
    },
    {
      id: 19,
      title: "Adobe XD",
      value: 85,
      icon: <SiAdobexd size={30} />,
    },
    {
      id: 20,
      title: "Figma",
      value: 85,
      icon: <FaFigma size={30} />,
    },
  
  ];

  return (
    <>
      <div>
        <TopBar2 />
      </div>
      <div id="about" className="about mt-5">
        <div className="about-me container">
          <div className={style.section_title}>
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            {/* <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/me.jpg" className="img-fluid" alt="" />
                        </div> */}
            <div
              className="col-lg-12 pt-4 pt-lg-0 content"
              data-aos="fade-left"
            >
              <h3>Full Stack Software Developer</h3>
              <p className="fst-italic">
                To acquire a dignified position where I can effectively
                contribute my skills as a Computer Engineer, Processing computer
                technical skills.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <FaBirthdayCake />{" "}
                      <span>&nbsp;&nbsp; 11 January 1997</span>
                    </li>
                    {/* <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <span>www.hasibulhasan.web.app</span>
                    </li> */}
                    <li>
                      <i className="bi bi-chevron-right"></i> <FaPhoneSquare />{" "}
                      <span>&nbsp;&nbsp;(+880) 1311210119</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <FaLocationDot />{" "}
                      <span>&nbsp;&nbsp;Dhaka, Bangladesh</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    {/* <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li> */}
                    <li>
                      <i className="bi bi-chevron-right"></i> <FaEnvelope />{" "}
                      <span>&nbsp;&nbsp;hasibulhasan442@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <FaWhatsapp />{" "}
                      <span>&nbsp;&nbsp;+8801311210119</span>
                    </li>
                    {/* <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <p>
                I believe I can do everything if I try my best. I'm a decent
                timekeeper, always willing to find out new skills & technology.
                I am ready to work with independently in busy environments and
                also within a team setting.
              </p>
            </div>
          </div>
        </div>

        <div className="counts container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-award"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="24"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            {data.map((item) => (
              <div className="col-lg-4">
                <div className="progress">
                  <span className="skill">
                    {item.icon} {item.title}{" "}
                    <i className="val">{item.value}%</i>
                  </span>
                  <div
                    className="progress-bar-wrap"
                    role="progressbar"
                    aria-label="Html progress bar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="interests container mt-5">
          <div className="section-title">
            <h2>Interests</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                <h3>Lorem Ipsum</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-bar-chart-box-line"
                  style={{ color: "#5578ff" }}
                ></i>
                <h3>Dolor Sitema</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-calendar-todo-line"
                  style={{ color: "#e80368" }}
                ></i>
                <h3>Sed perspiciatis</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i
                  className="ri-paint-brush-line"
                  style={{ color: "#e361ff" }}
                ></i>
                <h3>Magni Dolores</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-database-2-line"
                  style={{ color: "#47aeff" }}
                ></i>
                <h3>Nemo Enim</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-gradienter-line"
                  style={{ color: "#ffa76e" }}
                ></i>
                <h3>Eiusmod Tempor</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-file-list-3-line"
                  style={{ color: "#11dbcf" }}
                ></i>
                <h3>Midela Teren</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-price-tag-2-line"
                  style={{ color: "#4233ff" }}
                ></i>
                <h3>Pira Neve</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                <h3>Dirada Pack</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
                <h3>Moton Ideal</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-base-station-line"
                  style={{ color: "#ff5828" }}
                ></i>
                <h3>Verdo Park</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-fingerprint-line"
                  style={{ color: "#29cc61" }}
                ></i>
                <h3>Flavor Nivelanda</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials container mt-5">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-5.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

          <div className="owl-carousel testimonials-carousel"></div>
        </div>
      </div>
    </>
  );
}

export default About;
