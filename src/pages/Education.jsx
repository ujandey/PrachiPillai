import { useEffect } from 'react'

function Education() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-content')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    timelineItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="education-section">
      <h2 className="education-heading">EDUCATION</h2>
      <div className="timeline">
        <div className="timeline-container left">
          <div className="timeline-content">
            <h2>2020-2023</h2>
            <p>B.SC IN MATHEMATICS, Wilson College, Mumbai University</p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="timeline-content">
            <h2>2024-CURRENT</h2>
            <p> MCA, Mumbai University</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

