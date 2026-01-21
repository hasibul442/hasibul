import React from 'react'
import TopBar2 from '../NavBar/TopBar2'
import { FaClock, FaUser, FaArrowRight, FaCode, FaServer, FaDatabase } from 'react-icons/fa'

function Blog() {
    const blogs = [
        {
            id: 1,
            title: "Building Scalable Microservices with Laravel",
            excerpt: "Learn how to architect and build scalable microservices using Laravel and best practices for API development.",
            date: "Dec 15, 2024",
            readTime: "8 min read",
            category: "Backend",
            icon: <FaServer />,
            color: "#58a6ff"
        },
        {
            id: 2,
            title: "Modern React Patterns in 2024",
            excerpt: "Explore the latest React patterns and hooks that will make your code cleaner and more maintainable.",
            date: "Dec 10, 2024",
            readTime: "6 min read",
            category: "Frontend",
            icon: <FaCode />,
            color: "#7ee787"
        },
        {
            id: 3,
            title: "Database Optimization Techniques",
            excerpt: "Essential database optimization strategies for improving query performance and application speed.",
            date: "Dec 5, 2024",
            readTime: "10 min read",
            category: "Database",
            icon: <FaDatabase />,
            color: "#d2a8ff"
        },
        {
            id: 4,
            title: "CI/CD Pipeline with GitHub Actions",
            excerpt: "Set up a complete CI/CD pipeline for your projects using GitHub Actions and automated deployments.",
            date: "Nov 28, 2024",
            readTime: "7 min read",
            category: "DevOps",
            icon: <FaCode />,
            color: "#ffa657"
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
                        <h2 className="section-title">Blog</h2>
                        <h3 className="section-heading">Latest <span className="gradient-text">Articles</span></h3>
                        <p className="code-comment" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Sharing knowledge and experiences in software development
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="row g-4">
                        {blogs.map((blog, index) => (
                            <div
                                key={blog.id}
                                className="col-lg-6 fade-in-up"
                                style={{ animationDelay: `${0.1 * index}s` }}
                            >
                                <div className="dev-card h-100 p-4" style={{ borderLeft: `4px solid ${blog.color}` }}>
                                    <div className="d-flex align-items-start gap-4">
                                        {/* Icon */}
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            minWidth: '60px',
                                            borderRadius: '12px',
                                            background: `${blog.color}20`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: blog.color,
                                            fontSize: '24px'
                                        }}>
                                            {blog.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow-1">
                                            {/* Category & Meta */}
                                            <div className="d-flex flex-wrap align-items-center gap-3 mb-2">
                                                <span className="skill-tag" style={{
                                                    padding: '4px 12px',
                                                    fontSize: '11px',
                                                    background: `${blog.color}20`,
                                                    borderColor: blog.color,
                                                    color: blog.color
                                                }}>
                                                    {blog.category}
                                                </span>
                                                <span style={{
                                                    color: 'var(--text-muted)',
                                                    fontSize: '12px',
                                                    fontFamily: 'var(--font-mono)'
                                                }}>
                                                    <FaClock style={{ marginRight: '4px' }} />
                                                    {blog.readTime}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h4 style={{
                                                color: 'var(--text-primary)',
                                                fontSize: '18px',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                lineHeight: '1.4'
                                            }}>
                                                {blog.title}
                                            </h4>

                                            {/* Excerpt */}
                                            <p style={{
                                                color: 'var(--text-secondary)',
                                                fontSize: '14px',
                                                marginBottom: '16px',
                                                lineHeight: '1.6'
                                            }}>
                                                {blog.excerpt}
                                            </p>

                                            {/* Footer */}
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span style={{
                                                    color: 'var(--text-muted)',
                                                    fontSize: '12px',
                                                    fontFamily: 'var(--font-mono)'
                                                }}>
                                                    {blog.date}
                                                </span>
                                                <a
                                                    href="#"
                                                    style={{
                                                        color: blog.color,
                                                        fontSize: '14px',
                                                        fontWeight: '500',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    Read More <FaArrowRight size={12} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Coming Soon */}
                    <div className="text-center mt-5 fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="terminal-container d-inline-block" style={{ maxWidth: '400px' }}>
                            <div className="terminal-header">
                                <span className="terminal-dot red"></span>
                                <span className="terminal-dot yellow"></span>
                                <span className="terminal-dot green"></span>
                                <span className="terminal-title">coming_soon.md</span>
                            </div>
                            <div className="terminal-body text-center">
                                <p style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '14px',
                                    color: 'var(--text-secondary)',
                                    margin: 0
                                }}>
                                    More articles coming soon...<br />
                                    <span style={{ color: 'var(--accent-primary)' }}>Stay tuned!</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog