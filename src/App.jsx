import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Admin/Login'
import Dashboard from './pages/Admin/Dashboard'
import Error from './pages/Error'

import SuperAdminLogin from './components/SuperAdmin/SuperAdminLogin'
import SuperAdminDashboard from './components/SuperAdmin/SuperAdminDashboard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sadminlogin' element={<SuperAdminLogin/>}/>
        <Route path='/sadmindashboard/*' element={<SuperAdminDashboard/>}/>
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App