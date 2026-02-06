import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './portfolio.module.css';

function ProjectDetailsModal({ show, onHide, project }) {
  if (!project) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="lg" 
      centered
      contentClassName="custom-modal-content"
    >
      {/* Modal Body - Contains everything */}
      <Modal.Body className={styles.modalBody}>
        {/* Modal Header with Image */}
        <div className={styles.modalImage}>
          <img
            src={project.image}
            alt={project.title}
          />
          <div className={styles.modalOverlay}></div>
          
          {/* Close Button */}
          <button onClick={onHide} className={styles.closeButton}>
            <FaTimes />
          </button>

          {/* Category Badge */}
          {project.category && (
            <div className={styles.modalCategoryBadge}>
              {project.category}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className={styles.modalContentSection}>
          {/* Title with Icon */}
          <div className={styles.modalTitleSection}>
            <h2 className={styles.modalTitle}>
              <span className={styles.titleAccent}></span>
              {project.title}
            </h2>
          </div>

          {/* Project Description */}
          {project.description && (
            <div className={styles.modalSection}>
              <h3 className={styles.sectionTitle}>Project Overview</h3>
              <div className={styles.modalDescription}>
                <p>{project.description}</p>
              </div>
            </div>
          )}

          {/* In-Depth Details */}
          {project.longDescription && (
            <div className={styles.modalSection}>
              <h3 className={styles.sectionTitle}>Project Details</h3>
              <div className={styles.modalDescription}>
                <p dangerouslySetInnerHTML={{ __html: project.longDescription }}/>
              </div>
            </div>
          )}

          {/* My Role */}
          {project.role && (
            <div className={styles.modalSection}>
              <h3 className={styles.sectionTitle}>My Role</h3>
              <div className={styles.modalDescription}>
                <p dangerouslySetInnerHTML={{ __html: project.role }}/>
              </div>
            </div>
          )}

          {/* Technologies Section */}
          <div className={styles.modalSection}>
            <div className={styles.techSection}>
              <FaCode />
              <h3 className={styles.techTitle}>
                Technologies & Tools
              </h3>
            </div>
            <div className={styles.modalTechStack}>
              {project.technologies?.map((tech, i) => (
                <span key={i} className={styles.modalTechTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.modalButton} ${styles.githubButton}`}
            >
              <FaGithub />
              <span>View Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.modalButton} ${styles.liveButtonModal}`}
            >
              <FaExternalLinkAlt />
              <span>Visit Live Project</span>
            </a>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectDetailsModal;
