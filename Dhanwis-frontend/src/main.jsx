import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <HashRouter>
    <App />
    </HashRouter>
    </ThemeProvider>
  </StrictMode>,
)
