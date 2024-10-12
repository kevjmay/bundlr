import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Bundlr from './Bundlr.jsx'
import Email from './Test.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bundlr />
    <Email />
  </StrictMode>,
)
