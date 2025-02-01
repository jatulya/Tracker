import React from 'react' 
import Topbar from '../Components/shared/Topbar'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
      <Topbar name='Jazz Girl' profilePicture='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'/>
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout
