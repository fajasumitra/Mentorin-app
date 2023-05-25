import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Navbar() {
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
          <div className='mr-20 gap-5 flex font-semibold items-center'>
            <Button type="button" isSmall onClick={""} className='w-fit h-fit'>Daftar</Button>
            <Button type="button" isSmall onClick={""} className='w-fit h-fit'>Masuk</Button>
          </div>
        </div>
    </>
  )
}
