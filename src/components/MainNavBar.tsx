import React, { useState } from 'react'
import Navimage from '../Images/imagesgrand.png'



const MainNavBar = () => {

const [menuOpen, setMenuOpen] = useState(false);

     const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className='bg-white'>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          <div>
            <img src={Navimage} className='w-16'/>
          </div>

          <div className='nav-links md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] w-auto flex items-center px-5 '>
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

          <div className='flex items-center gap-6'>
            <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Sign In</button>
            <i className='text-3xl cursor-pointer md:hidden
            onclick={onToggleMenu(this)}'>
              <ion-icon name={menuOpen ? "close-outline" : "menu-outline"} ></ion-icon>
              </i>
          </div>

        </nav>
       
      </header>
    </>
  )
}

export default MainNavBar
