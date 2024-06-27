import React from 'react'
import ReactDOM from 'react-dom/client'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPages from "./Pages/LandingPage/LandingPage.tsx"
import Description from "./Pages/Description/Description.tsx"
import MentionLegales from "./Pages/MentionLegales/MentionLegales.tsx"
import Vente from "./Pages/Vente/Vente.tsx"
import '../main.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route path='/description' element={<Description />}></Route>
        <Route path='/legales' element ={ <MentionLegales />}></Route>
        <Route path='/vente' element={<Vente />}></Route>
        <Route path="/*" element={<LandingPages />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)