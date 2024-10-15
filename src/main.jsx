import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Bundlr from './Bundlr.jsx'
import Email from './Email.jsx'
import Services from './Services.jsx'
import Button from './Button.jsx'
import './index.css'

const handleButtonClick = () => {
  window.location.href = "https://www.google.com";
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bundlr />
    <Email />
    <Services />
    <Button handleClick={handleButtonClick} />
    <Button text="Submit" color='white' fontSize={12} margin={10}/>
    <Button text="Cancel" color='red' fontSize={12} margin={10}/>
  </StrictMode>,
);
