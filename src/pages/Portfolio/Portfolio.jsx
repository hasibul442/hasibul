import React, { useEffect, useState } from "react";
import TopBar2 from "../NavBar/TopBar2";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import ProjectDetailsModal from './ProjectDetailsModal';
import styles from './portfolio.module.css';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fatchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://adminhasibulhasan.vercel.app/api/v1/project?status=true"
      );
      const data = await response.json();
      setProjects(data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      setLoading(false);
    }
  }

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    fatchProjects();
  }, []);

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
          {/* Projects Grid */}
          <div className="row g-4">
            {projects.map((project, index) => (
              <div
                key={project?._id}
                className="col-lg-4 col-md-6 fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`${styles.projectCard} h-100`}>
                  {/* Project Image with Overlay */}
                  <div className={styles.projectImageContainer} onClick={() => openModal(project)}>
                    <img
                      className={styles.projectImage}
                      src={project?.image}
                      alt={project?.title}
                    />
                    <div className={styles.gradientOverlay}></div>
                    <div className={styles.darkOverlay}></div>
                    
                    {/* Category Badge */}
                    {project?.category && (
                      <div className={styles.categoryBadge}>
                        {project.category}
                      </div>
                    )}

                    {/* Info Icon */}
                    <div className={styles.infoIcon}>
                      <FaInfoCircle />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={styles.projectContent}>
                    {/* Title */}
                    <h4 className={styles.projectTitle}>
                      {project?.title}
                    </h4>

                    {/* Description */}
                    <p className={styles.projectDescription}>
                      {project?.description}
                    </p>

                    {/* Tech Stack */}
                    <div className={styles.techStack}>
                      {project?.technologies?.slice(0, 3).map((tech, i) => (
                        <span key={i} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                      {project?.technologies?.length > 3 && (
                        <span className={styles.techTagMore}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className={styles.actionButtons}>
                      <button
                        onClick={() => openModal(project)}
                        className={styles.detailsButton}
                      >
                        <FaInfoCircle /> Details
                      </button>
                      
                      {project?.githubUrl && (
                        <a
                          href={project?.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="View Source Code"
                          className={styles.iconButton}
                        >
                          <FaGithub />
                        </a>
                      )}
                      
                      {project?.liveUrl && (
                        <a
                          href={project?.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Visit Live Project"
                          className={styles.liveButton}
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Details Modal */}
          <ProjectDetailsModal 
            show={isModalOpen}
            onHide={closeModal}
            project={selectedProject}
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
