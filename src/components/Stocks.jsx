import React from 'react'
import StocksTable from './StocksTable'

const Stocks = () => {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
        <strong className="text-gray-700 font-medium">Recent Orders</strong>
        <div className="border-x border-gray-200 rounded-sm mt-3">
            <StocksTable />
        </div>
    </div>
  )
}

export default Stocks