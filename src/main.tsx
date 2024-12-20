import React from 'react'
import ReactDOM from 'react-dom/client'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPages from "./Pages/LandingPage/LandingPage.tsx"
import Description from "./Pages/Description/Description.tsx"
import MentionLegales from "./Pages/MentionLegales/MentionLegales.tsx"
import Vente from "./Pages/Vente/Vente.tsx"
import '../main.scss'
import { Provider } from 'react-redux'; // Importez le Provider
import { store } from '../redux.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPages />}></Route>
          <Route path='/description' element={<Description />}></Route>
          <Route path='/legales' element ={ <MentionLegales />}></Route>
          <Route path='/vente' element={<Vente />}></Route>
          <Route path='/*' element={<LandingPages />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
