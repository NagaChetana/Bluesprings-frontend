import React from 'react'
import { createRoot } from 'react-dom/client'
import { Desktop } from './screens/Desktop/Desktop'
import '../tailwind.css'

const App = () => {
  return <Desktop />
}

createRoot(document.getElementById('root')).render(<App />)
