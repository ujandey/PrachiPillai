import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero">
        <img src={`${import.meta.env.BASE_URL}assets/images/background.png`} alt="Minecraft background" className="hero-bg" />
        <div className="hero-text">
          <h1>Prachi <span className="highlight">Pillai</span></h1>
          <p>Senior Web Developer</p>
          <div className="hero-buttons">
            <a href={`${import.meta.env.BASE_URL}assets/resume.pdf`} target="_blank" className="start-btn" rel="noreferrer">Resume</a>
            <a href="https://www.linkedin.com/in/pillaiprachi/" target="_blank" className="start-btn" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <h2 className="block-nav-heading">WHAT HAVE I BUILT?</h2>
      <section className="block-nav">
        <Link to="/projects" className="block-card projects">Projects</Link>
        <Link to="/experience" className="block-card experience">Experience</Link>
        <Link to="/certifications" className="block-card certifications">Certifications</Link>
        <Link to="/skills" className="block-card skills">Skills</Link>
        <Link to="/education" className="block-card education">Education</Link>
      </section>
    </>
  )
}

export default Home

