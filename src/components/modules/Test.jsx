import React from 'react'
import { Outlet } from 'react-router-dom';

const Test = () => {
  return (
    <div>
     <Outlet/>
     This is test page
    </div>
  )
}

export default Test