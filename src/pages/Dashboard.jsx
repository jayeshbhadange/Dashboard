import React from 'react'
import DashboardHead from '../components/DashboardHead'
import ActiveCalls from '../components/ActiveCalls'
import Stocks from '../components/Stocks'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardHead />
      <div className='flex gap-4 w-full'>
        <Stocks/>
        <ActiveCalls />
      </div>
      
    </div>
  )
}

export default Dashboard