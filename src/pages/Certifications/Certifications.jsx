import React, { useEffect, useState } from "react";
import TopBar2 from "../NavBar/TopBar2";
import styles from "./certifications.module.css";

function Certifications() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fatchCertifications = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://adminhasibulhasan.vercel.app/api/v1/certification?status=true"
      );
      const data = await response.json();
      setCertifications(data?.data);
    } catch (error) {
      console.error("Error fetching certifications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fatchCertifications();
  }, []);
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
                key={cert._id}
                className={`${styles.certCard} fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.certImageWrapper}>
                  <img
                    src={cert?.image || "assets/img/default-fallback-image.png"}
                    alt={cert.title}
                    className={styles.certImage}
                    onError={(e) => {
                      e.target.src = "assets/img/default-fallback-image.png";
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
                    <i className="ri-calendar-line"></i> {new Date(cert.issueDate).toISOString().split('T')[0]}
                  </p>
                  <a
                    href={cert.credentialURL}
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
