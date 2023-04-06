import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App