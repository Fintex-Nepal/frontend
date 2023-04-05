import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/*' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App