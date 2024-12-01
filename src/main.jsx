import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Home } from './components/home.jsx'
import { Footer } from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Footer/>
    
  </StrictMode>,
)
