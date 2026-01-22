import React, { useState, useEffect, useRef } from 'react'
import TopBar2 from '../NavBar/TopBar2'
import { FaBriefcase, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa'
import { MdRocket } from "react-icons/md";
import styles from './style.module.css'

function Experience() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef(null);
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

    // Scroll progress calculation - completes when reaching bottom of page
    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const element = timelineRef.current;
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementHeight = rect.height;
                const windowHeight = window.innerHeight;
                
                const documentHeight = document.documentElement.scrollHeight;
                const scrollTop = window.scrollY;
                const scrollableHeight = documentHeight - windowHeight;
                
                // Start progress when element top reaches center of viewport
                const viewportCenter = windowHeight / 2;
                const startPoint = viewportCenter - elementTop;
                
                // Check if we're at the bottom of the page
                const isAtBottom = scrollTop + windowHeight >= documentHeight - 10;
                
                if (isAtBottom) {
                    setScrollProgress(1); // Complete the animation at bottom
                } else {
                    const scrollRange = elementHeight;
                    const progress = Math.min(Math.max(startPoint / scrollRange, 0), 1);
                    setScrollProgress(progress);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial calculation
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div>
                <TopBar2 />
            </div>

            <div className={`page-wrapper grid-background ${styles.pageWrapper}`}>
                <div className={`container ${styles.container}`}>
                    {/* Section Header */}
                    <div className={`fade-in-up ${styles.sectionHeader}`}>
                        <h2 className="section-title">Experience</h2>
                        <h3 className="section-heading">My <span className="gradient-text">Professional Journey</span></h3>
                        <p className={`code-comment ${styles.subtitle}`}>
                            Building scalable solutions and leading teams since 2018
                        </p>
                    </div>

                    {/* Timeline Roadmap */}
                    <div className="row justify-content-center">
                        <div className={`col-12 ${styles.timelineContainer}`}>
                            <div ref={timelineRef} className={styles.timeline}>
                                {/* Winding Road Path - SVG */}
                                <svg
                                    className={styles.roadSvg}
                                    viewBox="0 0 400 1500"
                                    preserveAspectRatio="none"
                                >
                                    {/* Road Surface */}
                                    <path
                                        d="M 350 50 
                                           C 350 120, 150 180, 50 280
                                           C -10 350, 100 400, 200 400
                                           C 300 400, 350 420, 350 500
                                           C 350 600, 150 680, 50 780
                                           C -20 860, 150 920, 280 950
                                           C 380 970, 380 1040, 300 1100
                                           C 200 1170, 50 1180, 50 1250
                                           C 50 1320, 180 1350, 330 1350
                                           L 320 1350"
                                        fill="none"
                                        stroke="var(--border-color)"
                                        strokeWidth="60"
                                        strokeLinecap="round"
                                        opacity="0.2"
                                    />
                                    {/* Road Border - Left */}
                                    <path
                                        d="M 380 50 
                                           C 380 120, 180 180, 80 280
                                           C 10 350, 130 400, 230 400
                                           C 330 400, 380 420, 380 500
                                           C 380 600, 180 680, 80 780
                                           C 10 860, 180 920, 310 950
                                           C 410 970, 410 1040, 330 1100
                                           C 230 1170, 80 1180, 80 1250
                                           C 80 1320, 210 1350, 330 1350
                                           L 320 1350"
                                        fill="none"
                                        stroke="var(--accent-primary)"
                                        strokeWidth="2"
                                        opacity="0.3"
                                    />
                                    {/* Road Border - Right */}
                                    <path
                                        d="M 320 50 
                                           C 320 120, 120 180, 20 280
                                           C -30 350, 70 400, 170 400
                                           C 270 400, 320 420, 320 500
                                           C 320 600, 120 680, 20 780
                                           C -50 860, 120 920, 250 950
                                           C 350 970, 350 1040, 270 1100
                                           C 170 1170, 20 1180, 20 1250
                                           C 20 1320, 150 1350, 330 1350
                                           L 320 1350"
                                        fill="none"
                                        stroke="var(--accent-primary)"
                                        strokeWidth="2"
                                        opacity="0.3"
                                    />
                                    {/* Dashed Center Line */}
                                    <path
                                        d="M 350 50 
                                           C 350 120, 150 180, 50 280
                                           C -20 350, 100 400, 200 400
                                           C 300 400, 350 420, 350 500
                                           C 350 600, 150 680, 50 780
                                           C -20 860, 150 920, 280 950
                                           C 380 970, 380 1040, 300 1100
                                           C 200 1170, 50 1180, 50 1250
                                           C 50 1320, 180 1350, 330 1350
                                           L 320 1350"
                                        fill="none"
                                        stroke="var(--accent-primary)"
                                        strokeWidth="3"
                                        strokeDasharray="20 15"
                                        opacity="0.5"
                                    />
                                    {/* Animated Progress Line */}
                                    <path
                                        d="M 350 50 
                                           C 350 120, 150 180, 50 280
                                           C -20 350, 100 400, 200 400
                                           C 300 400, 350 420, 350 500
                                           C 350 600, 150 680, 50 780
                                           C -20 860, 150 920, 280 950
                                           C 380 970, 380 1040, 300 1100
                                           C 200 1170, 50 1180, 50 1250
                                           C 50 1320, 180 1350, 330 1350
                                           L 320 1350"
                                        fill="none"
                                        stroke="url(#roadGradient)"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeDasharray="2500"
                                        strokeDashoffset={2500 - (scrollProgress * 2500)}
                                        style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
                                    />
                                    <defs>
                                        <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="var(--accent-from)" />
                                            <stop offset="50%" stopColor="var(--accent-to)" />
                                            <stop offset="100%" stopColor="var(--accent-from)" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Experience Stops */}
                                {experiences.map((exp, index) => {
                                    const positions = [
                                        { top: '100px', left: '40%', side: 'right' },
                                        { top: '350px', left: '40%', side: 'left' },
                                        { top: '650px', left: '20%', side: 'right' },
                                        { top: '900px', left: '35%', side: 'left' }
                                    ];
                                    const pos = positions[index];
                                    const isLeft = pos.side === 'left';

                                    return (
                                        <div
                                            key={exp.id}
                                            className={`fade-in-up ${styles.experienceStop} ${isLeft ? styles.left : styles.right}`}
                                            style={{
                                                animationDelay: `${index * 0.15}s`,
                                                top: pos.top,
                                                left: pos.left
                                            }}
                                        >
                                            {/* Icon Circle on Road */}
                                            <div 
                                                className={styles.iconCircle}
                                                style={{
                                                    background: exp.color,
                                                    boxShadow: `0 10px 40px ${exp.color}60, 0 0 0 3px ${exp.color}40`
                                                }}
                                            >
                                                {exp.icon}
                                                {/* Step Number */}
                                                <div 
                                                    className={styles.stepNumber}
                                                    style={{
                                                        border: `3px solid ${exp.color}`,
                                                        color: exp.color
                                                    }}
                                                >
                                                    {index + 1}
                                                </div>
                                            </div>

                                            {/* Info Card */}
                                            <div className={styles.infoCard}>
                                                {/* Period Badge */}
                                                <div 
                                                    className={styles.periodBadge}
                                                    style={{
                                                        background: `${exp.color}15`,
                                                        border: `1px solid ${exp.color}30`,
                                                        color: exp.color
                                                    }}
                                                >
                                                    <i className="bi bi-calendar-event"></i>
                                                    {exp.period}
                                                </div>

                                                {/* Company Name */}
                                                <h4 className={styles.companyName}>
                                                    {exp.company}
                                                </h4>

                                                {/* Role */}
                                                <p className={styles.role} style={{ color: exp.color }}>
                                                    {exp.role}
                                                </p>

                                                {/* Responsibilities Summary */}
                                                <p className={styles.responsibilities}>
                                                    {exp.responsibilities[0].substring(0, 80)}...
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* End of Road */}
                                <div className={styles.endMarker}>
                                    <div className={styles.endCircle}>
                                        <MdRocket style={{ transform: 'rotate(-90deg)' }} />
                                    </div>
                                    <div className={styles.endText}>
                                        <span className={styles.endComment}>{'// '}</span>
                                        Journey Started From Here
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
