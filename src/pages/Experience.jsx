import { useEffect } from 'react'

function Experience() {
  useEffect(() => {
    const logEntries = document.querySelectorAll('.log-entry')
    const experienceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 150)
            experienceObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )
    logEntries.forEach((entry) => experienceObserver.observe(entry))
    return () => experienceObserver.disconnect()
  }, [])

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">⚔️ EXPERIENCE LOG ⚔️</h2>
      <div className="adventure-log">
        <div className="log-entry">
          <div className="level-up-badge">CURRENT</div>
          <div className="quest-title">
            <span className="quest-icon">🧠</span>
            Level Up! You became a Hiring Management Analyst at Capgemini, Mumbai.
          </div>
          <div className="quest-description">
            ⚒️ Mastered daily and weekly trackers for technical interviews.<br />
            🗺️ Collected and updated candidate details across accounts to enhance data efficiency.<br />
            🏗️ Tracked ID assignments and managed weekly interview summaries in dashboards.<br />
            📞 Communicated with SPOCs to clear past-dated cases and update stakeholders.
          </div>
          <div className="quest-achievements">
            <div className="achievement">📊 Interview Tracker</div>
            <div className="achievement">📈 Data Analyst</div>
            <div className="achievement">🤝 Stakeholder Manager</div>
          </div>
          <div className="xp-gained">
            <div className="xp-item">+500 XP Data Analysis</div>
            <div className="xp-item">+400 XP Excel</div>
            <div className="xp-item">+300 XP Dashboard</div>
            <div className="xp-item">+200 XP Communication</div>
          </div>
          <div className="quest-duration">📅 Quest Duration: Apr 2024 - Current</div>
        </div>

        <div className="log-entry">
          <div className="level-up-badge">BONUS!</div>
          <div className="quest-title">
            <span className="quest-icon">💰</span>
            You also mastered Financial Reporting Analyst at Capgemini.
          </div>
          <div className="quest-description">
            📊 Prepared monthly, quarterly, and annual employee reports for management.<br />
            ⚡ Implemented process improvements enhancing reporting efficiency.<br />
            📈 Conducted variance analysis comparing actual results to forecasts.<br />
            🤖 Reduced report preparation time by 20% through automation techniques.
          </div>
          <div className="quest-achievements">
            <div className="achievement">📊 Report Master</div>
            <div className="achievement">🤖 Automation Expert</div>
            <div className="achievement">📈 Variance Analyst</div>
          </div>
          <div className="xp-gained">
            <div className="xp-item">+600 XP Financial Analysis</div>
            <div className="xp-item">+500 XP Automation</div>
            <div className="xp-item">+400 XP Excel</div>
            <div className="xp-item">+300 XP Reporting</div>
          </div>
          <div className="quest-duration">📅 Quest Duration: Apr 2024 - Current</div>
        </div>

        <div className="log-entry">
          <div className="level-up-badge">TEACH!</div>
          <div className="quest-title">
            <span className="quest-icon">🎓</span>
            You became a Mathematics Tutor at Mathademy, Mumbai.
          </div>
          <div className="quest-description">
            🎨 Delivered engaging lessons explaining mathematical concepts and problem-solving.<br />
            📚 Guided students through exercises and activities with patience.<br />
            📊 Maintained accurate records of student performance and attendance.<br />
            👥 Communicated progress updates to parents and administrators.
          </div>
          <div className="quest-achievements">
            <div className="achievement">🎓 Math Teacher</div>
            <div className="achievement">📊 Progress Tracker</div>
            <div className="achievement">🤝 Student Mentor</div>
          </div>
          <div className="xp-gained">
            <div className="xp-item">+600 XP Teaching</div>
            <div className="xp-item">+500 XP Mathematics</div>
            <div className="xp-item">+400 XP Communication</div>
            <div className="xp-item">+300 XP Mentoring</div>
          </div>
          <div className="quest-duration">📅 Quest Duration: Apr 2023 - Feb 2024</div>
        </div>

        <div className="log-entry">
          <div className="level-up-badge">SOCIAL!</div>
          <div className="quest-title">
            <span className="quest-icon">📱</span>
            You conquered Social Media as Manager at Treksafarnama.
          </div>
          <div className="quest-description">
            🎨 Managed content creation and scheduling with consistent branding.<br />
            🤝 Collaborated with teams to align social media with business goals.<br />
            🎪 Coordinated event logistics and vendor relations for smooth operations.<br />
            📈 Boosted engagement and brand visibility across platforms.
          </div>
          <div className="quest-achievements">
            <div className="achievement">📱 Social Media Master</div>
            <div className="achievement">🎨 Content Creator</div>
            <div className="achievement">🎪 Event Coordinator</div>
          </div>
          <div className="xp-gained">
            <div className="xp-item">+500 XP Social Media</div>
            <div className="xp-item">+400 XP Content Creation</div>
            <div className="xp-item">+300 XP Event Management</div>
            <div className="xp-item">+200 XP Branding</div>
          </div>
          <div className="quest-duration">📅 Quest Duration: Jun 2022 - Feb 2023</div>
        </div>

        <div className="log-entry">
          <div className="level-up-badge">HOST!</div>
          <div className="quest-title">
            <span className="quest-icon">🎤</span>
            You became an Epic Event Host and Manager.
          </div>
          <div className="quest-description">
            🎭 Hosted over 20 corporate, community, and social events with flair.<br />
            👥 Engaged live audiences of 500+ attendees maintaining high energy.<br />
            🎪 Coordinated event themes and content aligned with client objectives.<br />
            🎤 Managed stage presence, introductions, and live announcements.
          </div>
          <div className="quest-achievements">
            <div className="achievement">🎤 Master Host</div>
            <div className="achievement">🎪 Event Manager</div>
            <div className="achievement">👥 Crowd Energizer</div>
          </div>
          <div className="xp-gained">
            <div className="xp-item">+600 XP Public Speaking</div>
            <div className="xp-item">+500 XP Event Management</div>
            <div className="xp-item">+400 XP Leadership</div>
            <div className="xp-item">+300 XP Stage Presence</div>
          </div>
          <div className="quest-duration">📅 Quest Duration: Jun 2022 - Apr 2023</div>
        </div>

        <div className="log-entry">
          <div className="level-up-badge">START!</div>
          <div className="quest-title">
            <span className="quest-icon">📚</span>
            You began your journey as Library Intern at The Asiatic Society of Mumbai.
          </div>
          <div className="quest-description">
            📚 Supported daily library operations including shelving and organizing materials.<br />
            🤝 Provided excellent customer service to library patrons.<br />
            🎨 Created displays to promote library resources and conducted research.<br />
            📖 Assisted with library programs and events maintaining order.
          </div>
          <div className="quest-achievements">
            <div className="achievement">📚 Library Guardian</div>
            <div className="achievement">🤝 Customer Service</div>
            <div className="achievement">🎨 Resource Promoter</div>
          </div>
          <div className="xp-gained">
            <div className="xp-item">+300 XP Organization</div>
            <div className="xp-item">+250 XP Customer Service</div>
            <div className="xp-item">+200 XP Research</div>
            <div className="xp-item">+150 XP Communication</div>
          </div>
          <div className="quest-duration">📅 Quest Duration: Apr 2022 - Jun 2022</div>
        </div>
      </div>
    </section>
  )
}

export default Experience

