import React from "react";
import TopBar2 from "../NavBar/TopBar2";
import styles from "./certifications.module.css";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/assets/img/certifications/cert1.jpg",
      credentialUrl: "#",
    },
    {
      id: 2,
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
      image: "/assets/img/certifications/cert2.jpg",
      credentialUrl: "#",
    },
    {
      id: 3,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2023",
      image: "/assets/img/certifications/cert3.jpg",
      credentialUrl: "#",
    },
    {
      id: 4,
      title: "Docker Certified Associate",
      issuer: "Docker Inc",
      date: "2022",
      image: "/assets/img/certifications/cert4.jpg",
      credentialUrl: "#",
    },
  ];

  return (
    <>
      <TopBar2 />
      <div
        className="page-wrapper grid-background"
        style={{ minHeight: "100vh", paddingTop: "80px" }}
      >
        <div className="container mt-5 pt-5">
          <div className={`${styles.sectionTitle} text-center fade-in-up`}>
            <h2>Certifications & Achievements</h2>
            <p className={styles.subtitle}>
              Professional certifications and industry recognitions
            </p>
          </div>

          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`${styles.certCard} fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.certImageWrapper}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className={styles.certImage}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x200?text=Certificate";
                    }}
                  />
                  <div className={styles.certOverlay}>
                    <i className="ri-award-line"></i>
                  </div>
                </div>
                <div className={styles.certContent}>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certIssuer}>
                    <i className="ri-building-line"></i> {cert.issuer}
                  </p>
                  <p className={styles.certDate}>
                    <i className="ri-calendar-line"></i> {cert.date}
                  </p>
                  <a
                    href={cert.credentialUrl}
                    className={styles.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                    <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Certifications;
