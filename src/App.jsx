import { createRoot } from 'react-dom/client'
import './index.css'
import { Main } from './components/main.jsx'
import { Footer } from './components/Footer.jsx'
import { BrowserRouter } from 'react-router'
import { Home } from './components/home.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Home/>
    <Footer />
  </BrowserRouter>
);
