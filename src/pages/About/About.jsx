import React from "react";
import TopBar2 from "../NavBar/TopBar2";
import style from "./about.module.css";
import interestsStyle from "./interests.module.css";
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
        style={{ minHeight: "100vh"}}
      >
        <div id="about" className="about">
          <div className="container" id="about-me">
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
          <div className="skills container mt-3 pt-5" id="skills">
            <div className={`${style.section_title} fade-in-up`}>
              <h2>Skills / Tech Stack</h2>
            </div>
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Skill />
            </div>
          </div>

          {/* Interests Section */}
          <div className="interests container mt-3 pt-4" id="interests">
            <div className={`${style.section_title} fade-in-up`}>
              <h2>Interests</h2>
            </div>

            <div className={interestsStyle.interestsGrid}>
              <div
                className={`${interestsStyle.interestCard} fade-in-up`}
                style={{ animationDelay: "0.1s" }}
              >
                <div className={interestsStyle.iconWrapper}>
                  <i className={`ri-store-line ${interestsStyle.interestIcon}`} style={{ color: "#FFA657" }}></i>
                </div>
                <h3 className={interestsStyle.interestTitle}>Gadget</h3>
              </div>
              <div
                className={`${interestsStyle.interestCard} fade-in-up`}
                style={{ animationDelay: "0.15s" }}
              >
                <div className={interestsStyle.iconWrapper}>
                  <i
                    className={`ri-bar-chart-box-line ${interestsStyle.interestIcon}`}
                    style={{ color: "#58A6FF" }}
                  ></i>
                </div>
                <h3 className={interestsStyle.interestTitle}>New Technology</h3>
              </div>
              <div
                className={`${interestsStyle.interestCard} fade-in-up`}
                style={{ animationDelay: "0.2s" }}
              >
                <div className={interestsStyle.iconWrapper}>
                  <i className={`ri-cpu-line ${interestsStyle.interestIcon}`} style={{ color: "#7EE787" }}></i>
                </div>
                <h3 className={interestsStyle.interestTitle}>Arduino</h3>
              </div>
              <div
                className={`${interestsStyle.interestCard} fade-in-up`}
                style={{ animationDelay: "0.25s" }}
              >
                <div className={interestsStyle.iconWrapper}>
                  <i className={`ri-robot-line ${interestsStyle.interestIcon}`} style={{ color: "#D2A8FF" }}></i>
                </div>
                <h3 className={interestsStyle.interestTitle}>AI</h3>
              </div>
              <div
                className={`${interestsStyle.interestCard} fade-in-up`}
                style={{ animationDelay: "0.3s" }}
              >
                <div className={interestsStyle.iconWrapper}>
                  <i className={`ri-cloud-line ${interestsStyle.interestIcon}`} style={{ color: "#79C0FF" }}></i>
                </div>
                <h3 className={interestsStyle.interestTitle}>Cloud Computing</h3>
              </div>
              <div
                className={`${interestsStyle.interestCard} fade-in-up`}
                style={{ animationDelay: "0.35s" }}
              >
                <div className={interestsStyle.iconWrapper}>
                  <i
                    className={`ri-translate-2 ${interestsStyle.interestIcon}`}
                    style={{ color: "#FFA657" }}
                  ></i>
                </div>
                <h3 className={interestsStyle.interestTitle}>NLP</h3>
              </div>
              <div
                className={`${interestsStyle.interestCard} fade-in-up`}
                style={{ animationDelay: "0.4s" }}
              >
                <div className={interestsStyle.iconWrapper}>
                  <i
                    className={`ri-git-branch-line ${interestsStyle.interestIcon}`}
                    style={{ color: "#7EE787" }}
                  ></i>
                </div>
                <h3 className={interestsStyle.interestTitle}>DevOps</h3>
              </div>
              <div
                className={`${interestsStyle.interestCard} fade-in-up`}
                style={{ animationDelay: "0.45s" }}
              >
                <div className={interestsStyle.iconWrapper}>
                  <i
                    className={`ri-music-2-line ${interestsStyle.interestIcon}`}
                    style={{ color: "#FF7B72" }}
                  ></i>
                </div>
                <h3 className={interestsStyle.interestTitle}>Music</h3>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="testimonials container mt-3 pt-4 pb-5" id="testimonials">
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
