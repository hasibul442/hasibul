import React from "react";
import TopBar2 from "../NavBar/TopBar2";
import style from "./about.module.css";
import Skill from "../../components/Skill";
import Animation from "../../components/Animation";
import Testimonials from "../../components/Testimonials";
import Counts from "../../components/Counts";

function About() {
  return (
    <>
      <div>
        <TopBar2 />
      </div>
      <div
        className="page-wrapper grid-background"
        style={{ minHeight: "100vh", paddingTop: "80px" }}
      >
        <div id="about" className="about mt-5">
          <div className="container">
            <div className="row pt-5 align-items-center">
              <div className="col-lg-6 content fade-in-up">
                <div className={style.section_title}>
                  <h2>About Me</h2>
                </div>

                {/* Terminal Style About Box */}
                <div className="terminal-container mb-4">
                  <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">about.md</span>
                  </div>
                  <div className="terminal-body">
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        lineHeight: "1.8",
                      }}
                    >
                      <span style={{ color: "var(--accent-secondary)" }}>
                        ## Senior Software Engineer
                      </span>
                      <br />
                      <br />A passionate developer with{" "}
                      <span style={{ color: "var(--accent-warning)" }}>
                        6+ years
                      </span>{" "}
                      of experience, proficient in developing diverse{" "}
                      <span style={{ color: "var(--accent-primary)" }}>
                        microservice APIs
                      </span>
                      , leading software development teams, and designing robust
                      software architecture.
                      <br />
                      <br />
                      Eager to acquire new skills and familiar with emerging
                      technologies, prepared to work independently in fast-paced
                      environments and collaboratively within a team setting.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Animation src="./lottie/file_1.lottie" />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills container mt-5 pt-5">
            <div className={`${style.section_title} fade-in-up`}>
              <h2>Skills / Tech Stack</h2>
            </div>
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Skill />
            </div>
          </div>

          {/* Interests Section */}
          <div className="interests container mt-5 pt-4">
            <div className={`${style.section_title} fade-in-up`}>
              <h2>Interests</h2>
            </div>

            <div className="row g-4">
              <div
                className="col-lg-3 col-md-4 col-6 fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="interest-box">
                  <i className="ri-store-line" style={{ color: "#ffa657" }}></i>
                  <h3>Gadget</h3>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 fade-in-up"
                style={{ animationDelay: "0.15s" }}
              >
                <div className="interest-box">
                  <i
                    className="ri-bar-chart-box-line"
                    style={{ color: "#58a6ff" }}
                  ></i>
                  <h3>New Technology</h3>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="interest-box">
                  <i className="ri-cpu-line" style={{ color: "#7ee787" }}></i>
                  <h3>Arduino</h3>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 fade-in-up"
                style={{ animationDelay: "0.25s" }}
              >
                <div className="interest-box">
                  <i className="ri-robot-line" style={{ color: "#d2a8ff" }}></i>
                  <h3>AI</h3>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="interest-box">
                  <i className="ri-cloud-line" style={{ color: "#79c0ff" }}></i>
                  <h3>Cloud Computing</h3>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 fade-in-up"
                style={{ animationDelay: "0.35s" }}
              >
                <div className="interest-box">
                  <i
                    className="ri-translate-2"
                    style={{ color: "#ffa657" }}
                  ></i>
                  <h3>NLP</h3>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="interest-box">
                  <i
                    className="ri-git-branch-line"
                    style={{ color: "#7ee787" }}
                  ></i>
                  <h3>DevOps</h3>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 fade-in-up"
                style={{ animationDelay: "0.45s" }}
              >
                <div className="interest-box">
                  <i
                    className="ri-music-2-line"
                    style={{ color: "#ff7b72" }}
                  ></i>
                  <h3>Music</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="testimonials container mt-5 pt-4 pb-5">
            <div className={`${style.section_title} fade-in-up`}>
              <h2>Testimonials</h2>
            </div>
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Testimonials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
