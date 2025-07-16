import React from "react";
import TopBar2 from "../NavBar/TopBar2";
import style from "./style.module.css";

function Resume() {
  return (
    <>
      <div>
        <TopBar2 />
      </div>

      <div>
        <div className="mt-5">
          <div className="container pt-5 pb-5">
            <div className="card shadow-lg border-0">
              <div className="card-body px-5 py-4">
                <div>
                  <h3 style={{ color: "#000" }}>Mohammad Hasibul Hasan</h3>
                  <p className="p-0 m-0">Senior Software Engineer</p>
                  <div>
                    <p className="p-0 m-0"><strong>Phone:</strong> +880-1311210119</p>
                    <p className="p-0 m-0"><strong>Email:</strong> <a href="mailto:hasibulhasan442@gmail.com" className="text-primary text-decoration-none">hasibulhasan442@gmail.com</a></p>
                    <p className="p-0 m-0"><strong>Github:</strong> <a href="https://github.com/hasibul442" target="_blank" className="text-primary text-decoration-none">https://github.com/hasibul442</a></p>
                    <p className="p-0 m-0"><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/mohammad-hasibul-hasan" target="_blank" className="text-primary text-decoration-none">www.linkedin.com/in/mohammad-hasibul-hasan</a></p>
                    <p className="p-0 m-0"><strong>Location:</strong> H/F#22/5, Annondo Road, Mirpur 14, Dhaka</p>
                  </div>
                </div>

                <hr />

                <div>
                  <h4 className="fw-bold">Professional Summary</h4>
                  <p className="text-dark">
                    A Senior Software Engineer with 5+ years of experience, proficient in developing diverse microservice APIs, leading software development teams, and designing robust software architecture. Eager to acquire new skills and familiar with emerging technologies, prepared to work independently in fast-paced environments and collaboratively within a team setting. Objective is to secure a respected position to effectively utilize skills as a Computer Engineer, leveraging technical expertise in computer systems.
                  </p>
                </div>

                <hr />

                <div>
                  <h4 className="fw-bold">Skills</h4>
                  <div className="text-dark">
                    <ul>
                      <li><strong>Programming Languages & Frameworks: </strong> Php, Laravel , React Js , Next Js , Javascript , Java, Spring Boot </li>
                      <li><strong>APIs & Architecture: </strong> Rest API, Microservice , Software Design </li>
                      <li><strong>Databases: </strong>  MySql Database, Firebase, MongoDb </li>
                      <li><strong>Testing: </strong> TDD Approach , JUnit Test  </li>
                      <li><strong>Methodologies: </strong> Scrum </li>
                      <li><strong>Tools: </strong> Git, Slack, Discord, Jira, ClickUp, Backlog, CI/CD Automation, Figma, VS Code, Docker</li>
                      <li><strong>Monitoring & Logging: </strong> ELK Stack (Elasticsearch, Logstash, Kibana)</li>
                      <li><strong>Messaging & Event Streaming: </strong> Apache Kafka</li>
                    </ul>
                  </div>
                </div>

                <hr />

                <div className="section-content">
                  <h4 className="fw-bold">Work Experience</h4>
                  <div>
                    <h6 className="fw-bold p-0 m-0">Adventure Dhaka Limited - Senior Software Engineer</h6>
                    <p className="p-0 m-0"><i>Mar 2023 – Present</i></p>
                    <ul className="ps-3">
                      <li>Developed diverse microservice APIs for the main software, including an NDC API for integrating flight data and payment gateway APIs to support transactions in multiple currencies And Also integrate with frontend</li>
                      <li>Led, mentored, and managed the software development team, fostering a collaborative and results-driven work environment.</li>
                      <li>Designed robust software architecture and performed various types of testing to ensure quality and scalability.</li>
                      <li>Communicated effectively with the Japan team to gather project-related information and discuss requirements with the development team.</li>
                    </ul>
                  </div>
                  <div  >
                    <h6 className="fw-bold p-0 m-0">Ezze Technology Ltd - Laravel Developer</h6>
                    <p className="p-0 m-0"><i>Sep 2022 – Feb 2023</i></p>
                    <ul className="ps-3">
                      <li>Developed and designed diverse software backends and frontends tailored to client requirements.</li>
                      <li>Developed REST API to facilitate communication with mobile applications.</li>
                      <li>Worked on software development for both OTT platforms and ride-sharing backend systems.</li>
                      <li>Maintained and upgraded government projects.</li>
                    </ul>
                  </div>
                  <div  >
                    <h6 className="fw-bold p-0 m-0">Project Management Technology - Web Application Developer</h6>
                    <p className="p-0 m-0"><i>Jan 2020 – Aug 2022</i></p>
                    <ul className="ps-3">
                      <li>Developed and updated various management software solutions such as Account Management System and Laboratory Management System.</li>
                      <li>Maintained and upgraded BBA (Bangladesh Bridge Authority) software, including Document Management System.</li>
                      <li>Maintained Canteen Management System (POS) software.</li>
                    </ul>
                  </div>
                </div>

                <hr />

                <div>
                  <h4 className="fw-bold">Education</h4>
                  <div>
                    <h6 className="fw-bold p-0 m-0">B.Sc. in Computer Science & Engineering</h6>
                    <p className="p-0 m-0">Daffodil International University</p>
                    <p className="p-0 m-0">Year: 2015 – 2019</p>
                  </div>
                </div>

                <hr />

                <div className="section-content">
                  <h4 className="fw-bold">Projects</h4>
                  <div className="project-item">
                    <h6 className="fw-bold p-0 m-0">Integrate Payment Gateways</h6>
                    <ul>
                      <li><strong>Technology:</strong> Laravel, Rest API, TDD approach, System Design, MySQL Database</li>
                      <li><strong>Description:</strong> Integrated different payment gateways (PayPal, Korean, Philippines, Bangladeshi) into the system.</li>
                    </ul>
                  </div>
                  <div className="project-item">
                    <h6 className="fw-bold p-0 m-0">Integrate Airline API</h6>
                    <ul>
                      <li><strong>Technology:</strong> Laravel, Rest API, TDD approach, System Design, MySQL Database</li>
                      <li><strong>Description:</strong> Integrated various airlines (American Airlines, Lufthansa, Singapore Airlines) into the system</li>
                    </ul>
                  </div>
                  <div className="project-item">
                    <h6 className="fw-bold p-0 m-0">Otithee.com</h6>
                    <ul>
                      <li><strong>Technology:</strong> Laravel, Rest API, Next JS, MUI, MySQL Database, Microservice</li>
                      <li><strong>Description:</strong> An innovative platform for simplified travel experience, offering seamless access to Apartment, Hotel, Resort bookings, and exclusive deals.</li>
                    </ul>
                  </div>
                  <div className="project-item">
                    <h6 className="fw-bold p-0 m-0">Dhaka Live OTT</h6>
                    <ul>
                      <li><strong>Technology:</strong> Laravel, Rest API, MySQL, Ajax, jQuery, Firebase, Bootstrap</li>
                      <li><strong>Description:</strong> Created a microservice to handle requests and responses between applications and the web server.</li>
                    </ul>
                  </div>
                </div>

                <hr />

                <div class="section-content">
                  <h4 className="fw-bold">Professional Development & Certifications</h4>
                  <ul class="ps-3">
                    <li>"Web Development" from CPAT</li>
                    <li>"Advance Web Application Development" from Coursera</li>
                    <li>SQL Advanced from HackerRank</li>
                    <li>Version Control with git from Atlassian</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Resume;
