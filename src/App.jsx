import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Admin/Login'
import Dashboard from './pages/Admin/Dashboard'
import SuperAdminLogin from './components/SuperAdmin/SuperAdminLogin'
import SuperAdminDashboard from './components/SuperAdmin/SuperAdminDashboard'
import Error from './pages/Error'

// import KnowYourMember from './pages/Admin/UserRegestration/KYM/KnowYourMember'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/sadminlogin' element={<SuperAdminLogin/>}/>
        <Route exact path='/sadmindashboard/*' element={<SuperAdminDashboard/>}/>
        <Route exact path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App