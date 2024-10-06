import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiFetch from './components/ApiFetch'
import MouseMovement from './components/MouseMovement'
import DynamicTitle from './components/DynamicTitle'

function App() {
 

  return (
    <>
      <ApiFetch/>
      <MouseMovement/>
      <DynamicTitle/>
    </>
  )
}

export default App
