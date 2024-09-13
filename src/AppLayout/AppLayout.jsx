import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
<div className='sticky-top'>
<Navbar />
</div>
<Outlet />
<Footer />
    </div>


  )
}

export default AppLayout
