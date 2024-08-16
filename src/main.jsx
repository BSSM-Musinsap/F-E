import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Route from './Route.jsx'
import './fonts/fonts.css'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Route />
  </StrictMode>,
)
