import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appp from './Appp'
// import App from './App.jsx'
// import App2 from './Components/App2'
// import App3 from './Components/App3'

import Admin from './Components/Admin'
import User from './Components/User'
import User2 from './Components/User2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 />   */}
    {/* <Appp/> */}
    <Admin />
    {/* <User /> */}
    {/* <User2 /> */}
    
  </StrictMode>,
)
