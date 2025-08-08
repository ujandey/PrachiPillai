function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">DISCOVER MY SKILLS</h2>
      <p className="skills-subtext">Get to know what I can craft!</p>

      <div className="skills-grid">
        <div className="skill-card">
          <img src={`${import.meta.env.BASE_URL}assets/skills/python.png`} alt="Python" />
          <h3>Python</h3>
          <p>Automation, data wrangling & Flask magic.</p>
        </div>
        <div className="skill-card">
          <img src={`${import.meta.env.BASE_URL}assets/skills/r.png`} alt="R" />
          <h3>R</h3>
          <p>Statistical modeling & data science workflows.</p>
        </div>
        <div className="skill-card">
          <img src={`${import.meta.env.BASE_URL}assets/skills/sql.png`} alt="SQL" />
          <h3>SQL</h3>
          <p>Efficient data extraction and management.</p>
        </div>
        <div className="skill-card">
          <img src={`${import.meta.env.BASE_URL}assets/skills/mongodb.png`} alt="MongoDB" />
          <h3>MongoDB</h3>
          <p>NoSQL data handling at scale.</p>
        </div>
        <div className="skill-card">
          <img src={`${import.meta.env.BASE_URL}assets/skills/figma.png`} alt="Figma" />
          <h3>Figma</h3>
          <p>Prototyping seamless UI/UX designs.</p>
        </div>
        <div className="skill-card">
          <img src={`${import.meta.env.BASE_URL}assets/skills/angular.png`} alt="Angular" />
          <h3>Angular</h3>
          <p>Building scalable SPAs.</p>
        </div>
        <div className="skill-card">
          <img src={`${import.meta.env.BASE_URL}assets/skills/react.png`} alt="React" />
          <h3>React</h3>
          <p>Dynamic interfaces with reusable components.</p>
        </div>
        <div className="skill-card">
          <img src={`${import.meta.env.BASE_URL}assets/skills/html.png`} alt="HTML" />
          <h3>HTML</h3>
          <p>Semantically structured content foundation.</p>
        </div>
        <div className="skill-card">
          <img src={`${import.meta.env.BASE_URL}assets/skills/css.png`} alt="CSS" />
          <h3>CSS</h3>
          <p>Custom styling, animations & layout control.</p>
        </div>
      </div>
    </section>
  )
}

export default Skills

