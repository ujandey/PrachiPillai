function HireMe() {
  return (
    <section className="trading-screen">
      <div className="trading-container">
        <h1 className="trading-title">VILLAGER TRADING POST</h1>

        <div className="trading-interface">
          <div className="trader-side recruiter">
            <h2 className="trader-title">RECRUITER OFFERS</h2>
            <div className="trade-items">
              <div className="trade-item">
                <div className="item-icon briefcase"></div>
                <span className="item-name">Full-time Role</span>
              </div>
              <div className="trade-item">
                <div className="item-icon internship"></div>
                <span className="item-name">Internship</span>
              </div>
              <div className="trade-item">
                <div className="item-icon remote"></div>
                <span className="item-name">Remote Job</span>
              </div>
              <div className="trade-item">
                <div className="item-icon contract"></div>
                <span className="item-name">Contract Work</span>
              </div>
            </div>
          </div>

          <div className="trade-center">
            <button className="trade-button">
              <span className="trade-arrow">☕</span>
              <span className="trade-text">TRADE</span>
            </button>
          </div>

          <div className="trader-side candidate">
            <h2 className="trader-title">PRACHI OFFERS</h2>
            <div className="trade-items">
              <div className="trade-item">
                <div className="item-icon enchanted-book"></div>
                <span className="item-name">Web Development</span>
              </div>
              <div className="trade-item">
                <div className="item-icon potion"></div>
                <span className="item-name">Math & Physics</span>
              </div>
              <div className="trade-item">
                <div className="item-icon pickaxe"></div>
                <span className="item-name">Problem Solving</span>
              </div>
              <div className="trade-item">
                <div className="item-icon creative"></div>
                <span className="item-name">Creative Projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-book">
          <div className="book-cover">
            <h3 className="book-title">WRITTEN BOOK</h3>
            <div className="book-content">
              <div className="contact-item">
                <span className="contact-label">📧 Email:</span>
                <a href="mailto:pillaiprachi295@gmail.com" className="contact-link">pillaiprachi295@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">💼 LinkedIn:</span>
                <a href="https://www.linkedin.com/in/pillaiprachi/" target="_blank" className="contact-link" rel="noreferrer">pillaiprachi</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">📄 Resume:</span>
                <a href={`${import.meta.env.BASE_URL}assets/resume.pdf`} target="_blank" className="contact-link" rel="noreferrer">Resume PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireMe

