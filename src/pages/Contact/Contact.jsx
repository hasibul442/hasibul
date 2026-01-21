import React, { useState } from "react";
import TopBar2 from "../NavBar/TopBar2";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "hasibul442@gmail.com",
      link: "mailto:hasibul442@gmail.com",
      color: "#58a6ff"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+880 1XXX-XXXXXX",
      link: "tel:+8801234567890",
      color: "#7ee787"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
      color: "#d2a8ff"
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
            <h2 className="section-title">Contact</h2>
            <h3 className="section-heading">Let's <span className="gradient-text">Connect</span></h3>
            <p className="code-comment" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Have a project in mind? Let's discuss how we can work together
            </p>
          </div>

          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
                {/* Terminal Style Contact Info */}
                <div className="terminal-container mb-4">
                  <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">contact.json</span>
                  </div>
                  <div className="terminal-body">
                    <pre style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {`{
  `}<span style={{ color: 'var(--accent-primary)' }}>"status"</span>: <span style={{ color: 'var(--accent-secondary)' }}>"Available for work"</span>,{`
  `}<span style={{ color: 'var(--accent-primary)' }}>"response_time"</span>: <span style={{ color: 'var(--accent-secondary)' }}>"24 hours"</span>,{`
  `}<span style={{ color: 'var(--accent-primary)' }}>"preferred"</span>: <span style={{ color: 'var(--accent-secondary)' }}>"Email"</span>{`
}`}
                    </pre>
                  </div>
                </div>

                {/* Contact Cards */}
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="dev-card d-flex align-items-center gap-3 p-4 mb-3 text-decoration-none"
                    style={{ borderLeft: `4px solid ${info.color}` }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: `${info.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: info.color,
                      fontSize: '20px'
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '13px',
                        fontFamily: 'var(--font-mono)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        {info.title}
                      </p>
                      <p style={{
                        color: 'var(--text-primary)',
                        fontSize: '15px',
                        fontWeight: '500',
                        margin: 0
                      }}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}

                {/* Social Links */}
                <div className="d-flex gap-3 mt-4">
                  <a href="https://github.com/hasibul442" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/mohammad-hasibul-hasan/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="terminal-container">
                  <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">send_message.jsx</span>
                  </div>
                  <div className="terminal-body p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label style={{
                            color: 'var(--text-muted)',
                            fontSize: '13px',
                            fontFamily: 'var(--font-mono)',
                            marginBottom: '8px',
                            display: 'block'
                          }}>
                            // Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '14px 16px',
                              background: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              color: 'var(--text-primary)',
                              fontSize: '14px',
                              outline: 'none',
                              transition: 'all 0.3s ease'
                            }}
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="col-md-6">
                          <label style={{
                            color: 'var(--text-muted)',
                            fontSize: '13px',
                            fontFamily: 'var(--font-mono)',
                            marginBottom: '8px',
                            display: 'block'
                          }}>
                            // Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '14px 16px',
                              background: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              color: 'var(--text-primary)',
                              fontSize: '14px',
                              outline: 'none',
                              transition: 'all 0.3s ease'
                            }}
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="col-12">
                          <label style={{
                            color: 'var(--text-muted)',
                            fontSize: '13px',
                            fontFamily: 'var(--font-mono)',
                            marginBottom: '8px',
                            display: 'block'
                          }}>
                            // Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '14px 16px',
                              background: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              color: 'var(--text-primary)',
                              fontSize: '14px',
                              outline: 'none',
                              transition: 'all 0.3s ease'
                            }}
                            placeholder="Project Discussion"
                          />
                        </div>
                        <div className="col-12">
                          <label style={{
                            color: 'var(--text-muted)',
                            fontSize: '13px',
                            fontFamily: 'var(--font-mono)',
                            marginBottom: '8px',
                            display: 'block'
                          }}>
                            // Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{
                              width: '100%',
                              padding: '14px 16px',
                              background: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-color)',
                              borderRadius: '8px',
                              color: 'var(--text-primary)',
                              fontSize: '14px',
                              outline: 'none',
                              resize: 'vertical',
                              transition: 'all 0.3s ease'
                            }}
                            placeholder="Tell me about your project..."
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn-primary-dev w-100" style={{ padding: '16px' }}>
                            <FaPaperPlane /> Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
