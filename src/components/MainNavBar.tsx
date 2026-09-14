import React from 'react'
import Navimage from '../Images/imagesgrand.png'

const MainNavBar = () => {
  return (
    <>
      <header className='bg-white'>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          <div>
            <img src={Navimage} className='w-16'/>
          </div>

          <div className='md:static absolute min-h-[60vh] left-0 top-[9%] w-full flex items-center px-5 '>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>

              <li>
                <a className='hover:text-gray-500' href=''> Home</a>
              </li>

              <li>
                <a className='hover:text-gray-500' href=''> Promotion </a>
              </li>

              <li>
                <a className='hover:text-gray-500' href=''> Employes </a>
              </li>

              <li>
                <a className='hover:text-gray-500' href=''> About Us</a>
              </li>
            </ul>

          </div>

          <div>
            <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Sign In</button>
          </div>

        </nav>
      </header>
    </>
  )
}

export default MainNavBar
