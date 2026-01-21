import React from 'react'
import TopBar2 from '../NavBar/TopBar2'
import { FaBriefcase, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa'

function Experience() {
    const experiences = [
        {
            id: 1,
            company: "Adventure Dhaka Limited",
            role: "Senior Software Engineer",
            period: "Mar 2023 – Present",
            icon: <FaServer />,
            color: "#58a6ff",
            responsibilities: [
                "Developed diverse microservice APIs for the main software, including an NDC API for integrating flight data and payment gateway APIs",
                "Led, mentored, and managed the software development team, fostering a collaborative and results-driven work environment",
                "Designed robust software architecture and performed various types of testing to ensure quality and scalability",
                "Communicated effectively with the Japan team to gather project-related information and discuss requirements"
            ]
        },
        {
            id: 2,
            company: "Ezze Technology Ltd",
            role: "Laravel Developer",
            period: "Sep 2022 – Feb 2023",
            icon: <FaLaptopCode />,
            color: "#7ee787",
            responsibilities: [
                "Developed and designed diverse software backends and frontends tailored to client requirements",
                "Developed REST API to facilitate communication with mobile applications",
                "Worked on software development for both OTT platforms and ride-sharing backend systems",
                "Maintained and upgraded government projects"
            ]
        },
        {
            id: 3,
            company: "Project Management Technology",
            role: "Web Application Developer",
            period: "Jan 2020 – Aug 2022",
            icon: <FaCode />,
            color: "#d2a8ff",
            responsibilities: [
                "Developed and updated various management software solutions such as Account Management System and Laboratory Management System",
                "Maintained and upgraded BBA (Bangladesh Bridge Authority) software, including Document Management System",
                "Maintained Canteen Management System (POS) software"
            ]
        },
        {
            id: 4,
            company: "Fiverr",
            role: "Freelance Web Developer",
            period: "Jan 2018 - Jan 2020",
            icon: <FaBriefcase />,
            color: "#ffa657",
            responsibilities: [
                "Worked with international clients on various web development projects",
                "Built custom websites and web applications based on client requirements",
                "Gained experience in client communication and project management"
            ]
        }
    ];

    return (
        <>
            <div>
                <TopBar2 />
            </div>

            <div className="page-wrapper grid-background" style={{ minHeight: "100vh", paddingTop: '80px' }}>
                <div className="container py-5">
                    {/* Section Header */}
                    <div className="text-center mb-5 fade-in-up">
                        <h2 className="section-title">Experience</h2>
                        <h3 className="section-heading">My <span className="gradient-text">Professional Journey</span></h3>
                        <p className="code-comment" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Building scalable solutions and leading teams since 2018
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {experiences.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    className="fade-in-up mb-4"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="dev-card p-4" style={{ borderLeft: `4px solid ${exp.color}` }}>
                                        <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <div style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '12px',
                                                    background: `${exp.color}20`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: exp.color,
                                                    fontSize: '20px'
                                                }}>
                                                    {exp.icon}
                                                </div>
                                                <div>
                                                    <h4 style={{
                                                        color: 'var(--text-primary)',
                                                        fontSize: '18px',
                                                        fontWeight: '600',
                                                        marginBottom: '4px'
                                                    }}>
                                                        {exp.company}
                                                    </h4>
                                                    <p style={{
                                                        color: exp.color,
                                                        fontSize: '14px',
                                                        fontFamily: 'var(--font-mono)',
                                                        margin: 0
                                                    }}>
                                                        {exp.role}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="skill-tag mt-2 mt-md-0">
                                                <i className="bi bi-calendar3" style={{ marginRight: '6px' }}></i>
                                                {exp.period}
                                            </span>
                                        </div>

                                        <ul style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '14px',
                                            paddingLeft: '20px',
                                            marginBottom: 0
                                        }}>
                                            {exp.responsibilities.map((item, i) => (
                                                <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience