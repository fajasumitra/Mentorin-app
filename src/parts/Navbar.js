import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import {IoMdArrowDropdown} from 'react-icons/io'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    //logout handler
  };
  return (
    <>

        <div className='flex justify-between pt-5 w-full'>
          <div className='ml-20'>
            <div className='pl-5'>
            <Link to='/'>
              <img src='mentorin.png' alt='logo' className='w-20'/>
            </Link>
            </div>
          </div>
          <div className='flex gap-8 ml-32'>
            <Button type="link" to="/">Home</Button>
            <Button type="link" to="/mentor">Mentor</Button>
            <Button type="link" to="/error">About</Button>
          </div>
          <div className='mr-20 gap-2 flex font-medium items-center'>
            
            {/* if not login */}
            {/* <Button type="button" isSmall onClick={""} className='w-fit h-fit'>Daftar</Button>
            <Button type="button" isSmall onClick={""} className='w-fit h-fit'>Masuk</Button> */}

            {/* if login */}
            <Button type={'button'} onClick={toggleDropdown} className=''>Hi, Razan Jauhari </Button>
            <button onClick={toggleDropdown}><IoMdArrowDropdown /></button>
            <img src='profleFoto.png' alt='profle photo' className='rounded-full w-9 h-9'/>

            {isOpen && (
              <ul className="absolute right-0 mt-44 mr-20 py-2 w-48 bg-white rounded-md shadow-lg ">
                <li>
                  <Button type={'link'} to='/myorder'
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    My Account
                  </Button>
                </li>
                <li>
                  <Button type={'link'} to='/myorder'
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    My Orders
                  </Button>
                </li>
                <li>
                  <Button type={'link'} to='/login'
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            )}
            
          </div>
        </div>
    </>
  )
}
