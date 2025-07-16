import React from 'react'
import TopBar2 from '../NavBar/TopBar2'
import "./style.css"

function Experience() {
    return (
        <>
            <div>
                <TopBar2 />
            </div>

            <div style={{ height: "100vh" }}>
                <div id="about" className="about mt-5 bg_1">
                    <div className="container pt-5 pb-5">
                        <div className="timeline">
                            <div className="timeline__event timeline__event--type1">
                                <div className="timeline__event__icon "></div>
                                <div className="timeline__event__date">Mar 2023 – Present</div>
                                <div className="timeline__event__content ">
                                    <div className="timeline__event__title">
                                        Adventure Dhaka Limited <br /> <small>Senior Software Engineer</small>
                                    </div>
                                    <div className="timeline__event__description">
                                        <ul>
                                            <li>Developed diverse microservice APIs for the main software, including an NDC API for integrating flight data and payment gateway APIs to support transactions in multiple currencies And Also integrate with frontend</li>
                                            <li>Led, mentored, and managed the software development team, fostering a collaborative and results-driven work environment.</li>
                                            <li>Designed robust software architecture and performed various types of testing to ensure quality and scalability.</li>
                                            <li>Communicated effectively with the Japan team to gather project-related information and discuss requirements with the development team.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline__event timeline__event--type2">
                                <div className="timeline__event__icon"></div>
                                <div className="timeline__event__date">Sep 2022 – Feb 2023</div>
                                <div className="timeline__event__content">
                                    <div className="timeline__event__title">
                                        Ezze Technology Ltd <br /> <small>Laravel Developer</small>
                                    </div>
                                    <div className="timeline__event__description">
                                        <ul>
                                            <li>Developed and designed diverse software backends and frontends tailored to client requirements.</li>
                                            <li>Developed REST API to facilitate communication with mobile applications.</li>
                                            <li>Worked on software development for both OTT platforms and ride-sharing backend systems.</li>
                                            <li>Maintained and upgraded government projects.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline__event timeline__event--type3">
                                <div className="timeline__event__icon"></div>
                                <div className="timeline__event__date">Jan 2020 – Aug 2022</div>
                                <div className="timeline__event__content">
                                    <div className="timeline__event__title">
                                        Project Management Technology<br /> <small>Web Application Developer</small>
                                    </div>
                                    <div className="timeline__event__description">
                                        <ul>
                                            <li>Developed and updated various management software solutions such as Account Management System and Laboratory Management System.</li>
                                            <li>Maintained and upgraded BBA (Bangladesh Bridge Authority) software, including Document Management System.</li>
                                            <li>Maintained Canteen Management System (POS) software.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline__event timeline__event--type1">
                                <div className="timeline__event__icon"></div>
                                <div className="timeline__event__date">Jan 2018 - Jan 2020</div>
                                <div className="timeline__event__content">
                                    <div className="timeline__event__title">
                                        Fiverr <br /> <small>Freelance Web Developer</small>
                                    </div>
                                    <div className="timeline__event__description">
                                        {/* <p>
                                            Rajshahi University Biochemistry Association (RUBA) is Dhaka
                                            based student welfare association established in 2007 under
                                            the leadership of some proactive and dedicated alumni with an
                                            objective to engage alumni for keeping touch with each other
                                            and to support students and others stakeholders
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience