import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HygienistLandingApp } from './HygienistLandingApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HygienistLandingApp/>
  </StrictMode>,
)
