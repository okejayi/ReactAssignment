import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './components/App.jsx'
// import First from './components/First.jsx'
import Div from './components/Div.jsx'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Div/>
    <Section1/>
    <Section2/>
    <Section3/>
  </StrictMode>,
)
