import React, { useState } from "react";
import TopBar2 from "../NavBar/TopBar2";
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiMysql, SiFirebase } from 'react-icons/si';

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Flight Booking System",
      category: "fullstack",
      description: "A comprehensive flight booking platform with NDC API integration",
      tech: ["Laravel", "React", "MySQL"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "fullstack",
      description: "Full-featured e-commerce solution with payment gateway integration",
      tech: ["Next.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Document Management System",
      category: "backend",
      description: "Enterprise document management for Bangladesh Bridge Authority",
      tech: ["Laravel", "MySQL", "Vue.js"],
      image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=500",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "OTT Platform Backend",
      category: "backend",
      description: "Scalable backend for streaming platform with subscription management",
      tech: ["Laravel", "Redis", "MySQL"],
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500",
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Ride Sharing API",
      category: "api",
      description: "Real-time ride matching and tracking API system",
      tech: ["Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500",
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Laboratory Management",
      category: "fullstack",
      description: "Complete lab management solution with inventory tracking",
      tech: ["Laravel", "React", "MySQL"],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500",
      github: "#",
      live: "#"
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'backend', label: 'Backend' },
    { key: 'api', label: 'API' }
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
            <h2 className="section-title">Portfolio</h2>
            <h3 className="section-heading">Featured <span className="gradient-text">Projects</span></h3>
            <p className="code-comment" style={{ maxWidth: '600px', margin: '0 auto' }}>
              A collection of projects showcasing my skills and experience
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={filter === f.key ? 'btn-primary-dev' : 'btn-outline-dev'}
                style={{ padding: '10px 20px', fontSize: '14px' }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="col-lg-4 col-md-6 fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="dev-card h-100" style={{ overflow: 'hidden' }}>
                  {/* Project Image */}
                  <div style={{
                    position: 'relative',
                    height: '200px',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.7)'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 100%)'
                    }}></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <h4 style={{
                      color: 'var(--text-primary)',
                      fontSize: '18px',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      {project.title}
                    </h4>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '14px',
                      marginBottom: '16px'
                    }}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="skill-tag" style={{ padding: '4px 12px', fontSize: '12px' }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="d-flex gap-3">
                      <a href={project.github} className="social-icon" style={{ width: '40px', height: '40px', fontSize: '16px' }}>
                        <FaGithub />
                      </a>
                      <a href={project.live} className="social-icon" style={{ width: '40px', height: '40px', fontSize: '16px' }}>
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
