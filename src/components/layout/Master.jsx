import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import Nav from '../partials/Nav'
import Sidebar from '../partials/Sidebar'
import Footer from '../partials/Footer'

const Master = () => {
  return (
    <>
    <div className="sb-nav-fixed">
      <Nav />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
            <Outlet/>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <Footer />
    </div>

    
    </>
  )
}

export default Master