import React from 'react'
import { HiOutlineSearch , HiOutlineChatAlt } from 'react-icons/hi'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useState } from 'react';
import classNames from 'classnames'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='bg-white flex justify-between items-center h-16 px-4 border-b border-gray-200'>
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-3 left-2" />
            <input type='text' placeholder='search...' 
            className='text-sm focus:outline-none active:outline-none border border-gray-300 
            w-[14rem] h-10 pl-11 pr-4 rounded-sm'/>
        </div>
        <div className="flex items-center gap-2 mr-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className={classNames(isOpen && 'bg-gray-200','rounded-sm')}
              onClick={toggleDropdown}
              onBlur={() => setIsOpen(false)} // This will hide the dropdown if the user clicks outside
            >
              <HiOutlineChatAlt fontSize={24}/>
            </div>
            {isOpen && (
              <div
                tabIndex={0}
                className="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow right-0"
              >
                <div className="card-body">
                  <h3 className="card-title">Card title!</h3>
                  <p>you can use any element as a dropdown.</p>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>

        </div>
    </div>
  )
}

export default Header