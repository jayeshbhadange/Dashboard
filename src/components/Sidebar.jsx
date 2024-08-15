import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../consts/navigations'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {
  return (
    <div className='flex flex-col text-white w-60 p-3 bg-neutral-900 h-screen '>
      <div className='flex items-center gap-2 px-1 py-3'>
        <FcBullish fontSize={24}/>
        <span className='text-neutral-200 text-lg'>Dashboard</span>
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5 '>
        {DASHBOARD_SIDEBAR_LINKS.map((item)=>{
          return(
            <SidebarLink key={item.key} item={item}/>
          )
        })}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>{
          return (
            <SidebarLink key={item.key} item={item}/>
          )
        })}
        <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
          <span className='text-xl'>
            <HiOutlineLogout/>
          </span>
          Logout
        </div>
      </div>
    </div>
  )
}

function SidebarLink({item}){
const { pathname } = useLocation()
return (
  <Link to={item.path} className={classNames(item.path===pathname?'bg-neutral-700 text-white' : 'text-neutral-400',linkClass)}>
    <span className="text-xl">{item.icon}</span>
    {item.label}
  </Link>
)

}
export default Sidebar