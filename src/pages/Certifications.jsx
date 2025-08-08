function Certifications() {
  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <div className="certifications-left-panel">
          <h2 className="certifications-heading">CERTIFICATIONS & ACHIEVEMENTS</h2>
          <p className="certifications-description">Now there are even more ways to showcase my expertise! Explore the certifications and achievements that validate my skills and experience.</p>
          <button className="explore-certifications-btn">EXPLORE CERTIFICATIONS</button>
        </div>

        <div className="certifications-cards">
          <div className="certification-card">
            <div className="certification-image">
              <img src={`${import.meta.env.BASE_URL}assets/certifications/sattelite.png`} alt="satellite data science" />
              <div className="certification-label">Certification</div>
            </div>
            <div className="certification-info">
              <h3>Satellite Data Science</h3>
              <p className="certification-author">by Spartifical</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-image">
              <img src={`${import.meta.env.BASE_URL}assets/certifications/data.png`} alt="data analyst" />
              <div className="certification-label">Certification</div>
            </div>
            <div className="certification-info">
              <h3>Data Analyst</h3>
              <p className="certification-author">by ExcelR</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-image">
              <img src={`${import.meta.env.BASE_URL}assets/certifications/ds.png`} alt="data scientist" />
              <div className="certification-label">Certification</div>
            </div>
            <div className="certification-info">
              <h3>Data Scientist</h3>
              <p className="certification-author">by ExcelR</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-image">
              <img src={`${import.meta.env.BASE_URL}assets/certifications/cep.png`} alt="cep course" />
              <div className="certification-label">Certification</div>
            </div>
            <div className="certification-info">
              <h3>CEP Course</h3>
              <p className="certification-author">by Wilson College</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

