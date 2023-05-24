import React from 'react'
import Button from '../components/Button'

export default function Navbar() {
  return (
    <>

        <div className='flex justify-between pt-5 w-full'>
          <div className='ml-20'>
            <p className='text-2xl font-semibold'>Mentorin</p>
          </div>
          <div className='flex gap-8 ml-32'>
            <Button type="link" to="/">Home</Button>
            <Button type="link" to="/mentor">Mentor</Button>
            <Button type="link" to="/about">About</Button>
          </div>
          <div className='mr-20 gap-5 flex font-semibold'>
            <Button type="button" isSmall onClick={""}>Daftar</Button>
            <Button type="button" isSmall onClick={""}>Masuk</Button>
          </div>
        </div>
    </>
  )
}
