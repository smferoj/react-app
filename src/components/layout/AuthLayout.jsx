
import React from 'react'
import { Outlet } from 'react-router-dom'
function AuthLayout() {
  return (
    <div>
      <h2> Public Dashboard </h2>
      <Outlet />
    </div>
  )
}

export default AuthLayout;