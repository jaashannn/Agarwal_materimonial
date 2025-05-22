import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            color: '#333',
            border: '1px solid rgba(255, 192, 203, 0.3)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
)