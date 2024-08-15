import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Header from '../Header'
const DashboardLayout = () => {
  return (
    <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className=' flex flex-col flex-1'>
            <Header />
            <div  className="flex-1 p-4 min-h-0 overflow-auto">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout