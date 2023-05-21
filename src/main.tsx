import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutesPage from './Routes.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesPage />
    </BrowserRouter>
  </React.StrictMode>,
)
