import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Main } from './components/main.jsx'
import { Footer } from './components/Footer.jsx'


import { Home } from './components/home.jsx'
import { Footer } from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
    <Footer/>   
  </StrictMode>,
)
