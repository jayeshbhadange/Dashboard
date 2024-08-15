import { useState } from 'react'
import DashboardLayout from './components/global/DashboardLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route path='user' element={<DashboardLayout/>}>
        <Route path='dashboard' element={<Dashboard/>} />
      </Route>
    </Routes>
  )
}

export default App