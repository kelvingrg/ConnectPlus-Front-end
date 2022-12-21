import React from 'react'
import {Navigate,Outlet } from 'react-router-dom'

function AdminAuthorisation() {
  const token =localStorage.getItem('adminToken')
  return (
  token?<Outlet/>:<Navigate to="/admin"/>
  )
}

export default AdminAuthorisation