import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ModalsContextProvider } from './contexts/ModalsContexts.tsx'
import { CompanyContextProvider } from './contexts/CompanyContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CompanyContextProvider>
      <ModalsContextProvider>
        <App />
      </ModalsContextProvider>
    </CompanyContextProvider>
  </React.StrictMode>,
)
