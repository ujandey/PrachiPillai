import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/main.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/skills.css'
import './styles/certifications.css'
import './styles/projects.css'
import './styles/block-nav.css'
import './styles/education.css'
import './styles/experience.css'
import './styles/hire-me.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
