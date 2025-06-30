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
import { SiAdobexd, SiFirebase, SiMysql, SiNextdotjs } from "react-icons/si";
import { TbApi, TbBrandJavascript } from "react-icons/tb";
import TopBar2 from "../NavBar/TopBar2";
import style from "./about.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Skill from "../../components/Skill";
import Animation from "../../components/Animation";
import Testimonials from "../../components/Testimonials";

function About() {
  return (
    <>
      <div>
        <TopBar2 />
      </div>
      <div id="about" className="about mt-5">
        <div className="about-me container">
          <div className={style.section_title}>
            <h2>About</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-6 pt-4 pt-lg-0 content"
              data-aos="fade-left"
            >
              <p className="fst-italic">
                A Senior Software Engineer proficient in developing diverse
                microservice APIs, leading software development teams, and
                designing robust software architecture. Eager to acquire new
                skills and familiar with emerging technologies, prepared to work
                independently in fast-paced environments and collaboratively
                within a team setting. Objective is to secure a respected
                position to effectively utilize skills as a Computer Engineer,
                leveraging technical expertise in computer systems.
              </p>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
            >
              <Animation src="./lottie/file_1.lottie" />
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

          <Skill />
        </div>

        <div className="interests container mt-5">
          <div className="section-title">
            <h2>Interests</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                <h3>Gadget</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-bar-chart-box-line"
                  style={{ color: "#5578ff" }}
                ></i>
                <h3>New Technology</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-calendar-todo-line"
                  style={{ color: "#e80368" }}
                ></i>
                <h3>Arduino</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i
                  className="ri-paint-brush-line"
                  style={{ color: "#e361ff" }}
                ></i>
                <h3>Artificial Intelligence</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-database-2-line"
                  style={{ color: "#47aeff" }}
                ></i>
                <h3>Cloud Computing</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-gradienter-line"
                  style={{ color: "#ffa76e" }}
                ></i>
                <h3>Natural Language Processing </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-file-list-3-line"
                  style={{ color: "#11dbcf" }}
                ></i>
                <h3>DevOps</h3>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-price-tag-2-line"
                  style={{ color: "#4233ff" }}
                ></i>
                <h3>Pira Neve</h3>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                <h3>Dirada Pack</h3>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
                <h3>Listening Music</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-base-station-line"
                  style={{ color: "#ff5828" }}
                ></i>
                <h3>Fish Aquarium</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials container mt-5 mb-5">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>

          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default About;
