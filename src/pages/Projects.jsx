import { useEffect, useState } from 'react'

function Projects() {
  const [activeTab, setActiveTab] = useState('proj1')
  const [detailsOpen, setDetailsOpen] = useState(false)

  useEffect(() => {
    setDetailsOpen(false)
  }, [activeTab])

  return (
    <section className="projects-section">
      <h2 className="section-title">PROJECTS</h2>

      <div className="projects-container">
        <div className="project-main">
          <aside className="project-sidebar">
            <button
              className={`tab ${activeTab === 'proj1' ? 'active' : ''}`}
              onClick={() => setActiveTab('proj1')}
            >
              ADIDAS SALES DASHBOARD
            </button>
            <button
              className={`tab ${activeTab === 'proj2' ? 'active' : ''}`}
              onClick={() => setActiveTab('proj2')}
            >
              OLIST STORE DASHBOARD
            </button>
            <button
              className={`tab ${activeTab === 'proj3' ? 'active' : ''}`}
              onClick={() => setActiveTab('proj3')}
            >
              BOOK DATABASE
            </button>
          </aside>

          <div className="project-display">
            {activeTab === 'proj1' && (
              <div className="project-preview" id="proj1">
                <img src={`${import.meta.env.BASE_URL}assets/projects/sales.png`} alt="Adidas Sales Dashboard Preview" />
              </div>
            )}
            {activeTab === 'proj2' && (
              <div className="project-preview" id="proj2">
                <img src={`${import.meta.env.BASE_URL}assets/projects/olist.jpg`} alt="Olist Store Dashboard Preview" />
              </div>
            )}
            {activeTab === 'proj3' && (
              <div className="project-preview" id="proj3">
                <img src={`${import.meta.env.BASE_URL}assets/projects/book_database.png`} alt="Book Database Preview" />
              </div>
            )}
            <div className="project-controls">
              <button
                className="more-details-btn"
                onClick={() => setDetailsOpen((v) => !v)}
              >
                {detailsOpen ? 'Hide Details' : 'More Details'}
              </button>
            </div>
          </div>
        </div>

        <div className="project-details-container">
          {activeTab === 'proj1' && (
            <div className={`project-details ${detailsOpen ? 'show' : 'hidden'}`} id="proj1-details">
              <h4>ADIDAS SALES DASHBOARD - Detailed Information</h4>
              <ul>
                <li><strong>Technology Stack:</strong> Power BI, SQL, Excel</li>
                <li><strong>Key Features:</strong> Real-time sales tracking, regional performance analysis, product category insights</li>
                <li><strong>Data Sources:</strong> Sales database, inventory management system, customer relationship management</li>
                <li><strong>Key Metrics:</strong> Revenue growth, sales by region, top-performing products, customer segmentation</li>
                <li><strong>Business Impact:</strong> Improved decision-making process, 15% increase in sales efficiency</li>
                <li><strong>Challenges Solved:</strong> Data consolidation from multiple sources, real-time reporting requirements</li>
              </ul>
            </div>
          )}
          {activeTab === 'proj2' && (
            <div className={`project-details ${detailsOpen ? 'show' : 'hidden'}`} id="proj2-details">
              <h4>OLIST STORE DASHBOARD - Detailed Information</h4>
              <ul>
                <li><strong>Technology Stack:</strong> Python, Pandas, Matplotlib, Seaborn, Streamlit</li>
                <li><strong>Key Features:</strong> Interactive dashboard, KPI monitoring, predictive analytics</li>
                <li><strong>Data Sources:</strong> E-commerce platform data, customer reviews, transaction history</li>
                <li><strong>Key Metrics:</strong> Sales performance, customer satisfaction scores, inventory turnover</li>
                <li><strong>Business Impact:</strong> Enhanced operational efficiency, better inventory management</li>
                <li><strong>Challenges Solved:</strong> Complex data visualization, real-time monitoring requirements</li>
              </ul>
            </div>
          )}
          {activeTab === 'proj3' && (
            <div className={`project-details ${detailsOpen ? 'show' : 'hidden'}`} id="proj3-details">
              <h4>BOOK DATABASE - Detailed Information</h4>
              <ul>
                <li><strong>Technology Stack:</strong> MySQL, Python, SQLAlchemy</li>
                <li><strong>Key Features:</strong> Book inventory management, user registration, borrowing system</li>
                <li><strong>Data Sources:</strong> Library catalog, user database, transaction logs</li>
                <li><strong>Key Metrics:</strong> Book availability, user activity, popular genres</li>
                <li><strong>Business Impact:</strong> Streamlined library operations, improved user experience</li>
                <li><strong>Challenges Solved:</strong> Data normalization, user authentication, transaction tracking</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects

