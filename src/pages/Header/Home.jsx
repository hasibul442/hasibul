import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../NavBar/TopBar'
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaCode, FaTerminal } from 'react-icons/fa'
import { SiReact, SiLaravel, SiJavascript, SiPython, SiNodedotjs, SiMysql } from 'react-icons/si'
import styles from './home.module.css'
import { calculateExperience } from '../../utils/helpers'

function Home() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Software Developer';
  const [index, setIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const experience = calculateExperience('2020-01-15');

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Page load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating tech icons data
  const floatingIcons = [
    { Icon: SiReact, color: '#61DAFB', size: 40, top: '15%', left: '8%', delay: 0 },
    { Icon: SiLaravel, color: '#FF2D20', size: 35, top: '25%', right: '12%', delay: 1 },
    { Icon: SiJavascript, color: '#F7DF1E', size: 32, bottom: '30%', left: '5%', delay: 2 },
    { Icon: SiPython, color: '#3776AB', size: 38, bottom: '20%', right: '8%', delay: 0.5 },
    { Icon: SiNodedotjs, color: '#339933', size: 36, top: '60%', left: '12%', delay: 1.5 },
    { Icon: SiMysql, color: '#4479A1', size: 34, top: '45%', right: '5%', delay: 2.5 },
  ];

  return (
    <div id="header" className={`${styles.header} ${styles.gradientBgAnimated}`}>
      {/* Animated Gradient Orbs */}
      <div className={`${styles.orb} ${styles.orbPrimary}`}></div>
      <div className={`${styles.orb} ${styles.orbTertiary}`}></div>
      <div className={`${styles.orb} ${styles.orbSecondary}`}></div>

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, color, size, delay, ...pos }, i) => (
        <div
          key={i}
          className={`${styles.floatingIcon} ${styles.parallaxElement}`}
          style={{
            ...pos,
            color,
            animationDelay: `${delay}s`,
            animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
            transform: `translate(${mousePosition.x * (i % 3 + 1) * 0.5}px, ${mousePosition.y * (i % 3 + 1) * 0.5}px)`
          }}
        >
          <Icon size={size} />
        </div>
      ))}

      {/* Grid Background */}
      <div className={styles.gridBackground}></div>

      <div className={`container ${styles.container}`}>
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">

            {/* Main Heading */}
            <h1
              className={`${styles.mainHeading} ${isLoaded ? styles.slideUp : ''}`}
              style={{ opacity: isLoaded ? 1 : 0, animationDelay: '0.4s' }}
            >
              <span style={{ color: 'var(--text-primary)' }}>Mohammad </span>
              <span className={`${styles.glowText} ${styles.nameGradient}`}>
                Hasibul Hasan
              </span>
            </h1>

            {/* Typing Effect Role */}
            <h2
              className={`${styles.subHeading} ${isLoaded ? styles.slideUp : ''}`}
              style={{ opacity: isLoaded ? 1 : 0, animationDelay: '0.6s' }}
            >
              I'm a passionate{' '}
              <span className={styles.codeString}>{text}</span>
              <span className={`${styles.cursorBlink} ${styles.cursor}`}></span>
            </h2>

            {/* Navigation */}
            <div
              className={isLoaded ? styles.slideUp : ''}
              style={{ opacity: isLoaded ? 1 : 0, animationDelay: '1s' }}
            >
              <TopBar />
            </div>


            {/* Terminal Style Intro - After Social Links */}
            <div
              className={`terminal-container ${styles.terminalGlow} ${styles.terminalContainer} mt-5 ${isLoaded ? styles.scaleIn : ''}`}
              style={{ opacity: isLoaded ? 1 : 0, animationDelay: '1.4s' }}
            >
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">~/portfolio/developer.js</span>
              </div>
              <div className={`terminal-body ${styles.terminalBody}`}>
                <p className={`${styles.codeText} ${styles.codeTextMuted}`}>
                  <span className={styles.codeKeyword}>const</span> developer = {'{'}
                </p>
                <p className={`${styles.codeText} ${styles.codeTextSecondary}`}>
                  <span className={styles.codeProp}>name</span>: <span className={styles.codeString}>"Mohammad Hasibul Hasan"</span>,
                </p>
                <p className={`${styles.codeText} ${styles.codeTextSecondary}`}>
                  <span className={styles.codeProp}>role</span>: <span className={styles.codeString}>"Senior Software Engineer"</span>,
                </p>
                <p className={`${styles.codeText} ${styles.codeTextSecondary}`}>
                  <span className={styles.codeProp}>experience</span>: <span className={styles.codeString}>"{experience.years} years, {experience.months} months, {experience.days} days"</span>,
                </p>
                <p className={`${styles.codeText} ${styles.codeTextSecondary}`}>
                  <span className={styles.codeProp}>location</span>: <span className={styles.codeString}>"Bangladesh 🇧🇩"</span>,
                </p>
                <p className={`${styles.codeText} ${styles.codeTextSecondary}`} style={{ marginBottom: '8px' }}>
                  <span className={styles.codeProp}>available</span>: <span className={styles.codeString}>true</span> <span className={styles.codeString}>✓</span>
                </p>
                <p className={`${styles.codeText} ${styles.codeTextMuted}`}>{'};'}</p>
              </div>
            </div>

                        {/* CTA Buttons */}
            <div
              className={`d-flex gap-3 justify-content-center flex-wrap mt-4 ${isLoaded ? styles.slideUp : ''}`}
              style={{ opacity: isLoaded ? 1 : 0, animationDelay: '0.8s' }}
            >
              <Link to="/about" className={`btn-primary-dev ${styles.btnAnimated}`}>
                <FaCode /> Explore My Work
              </Link>
              <Link to="/contact" className={`btn-outline-dev ${styles.btnAnimated}`}>
                <FaTerminal /> Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div
              className={`d-flex gap-3 justify-content-center mt-5 ${isLoaded ? styles.slideUp : ''}`}
              style={{ opacity: isLoaded ? 1 : 0, animationDelay: '1.2s' }}
            >
              <a href="https://github.com/hasibul442" target="_blank" rel="noopener noreferrer" className={`social-icon ${styles.socialIconAnimated}`}>
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/hasibul.hasan.77582/" target="_blank" rel="noopener noreferrer" className={`social-icon ${styles.socialIconAnimated}`}>
                <FaFacebook />
              </a>
              <a href="#" className={`social-icon ${styles.socialIconAnimated}`}>
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/mohammad-hasibul-hasan/" target="_blank" rel="noopener noreferrer" className={`social-icon ${styles.socialIconAnimated}`}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
