import { useState } from 'react'
import './App.css'
import {Routes,Route } from 'react-router-dom'
import EventList from './pages/EventList';
import Register from './pages/Register'
import Success from './pages/Success'

function App() {
  return (
    <Routes>
        <Route path='/' element={<EventList/>} />
        <Route path='/register/:id' element={<Register/>} />
        <Route path='/success' element={<Success/>} />
    </Routes>
  )
}

export default App
