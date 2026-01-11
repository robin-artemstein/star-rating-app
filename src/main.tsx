// Import React and ReactDOM for rendering
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import the main App component
import App from './App.tsx'
// Import global CSS (includes Tailwind)
import './index.css'

// Render the App component into the HTML element with id 'root'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)