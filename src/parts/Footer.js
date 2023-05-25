import React from 'react'
import Button from '../components/Button'

export default function Footer() {
  return (
    <>
        <div className='w-full h-[300px] bg-[#222222] mt-24 flex text-white pt-16'>
          <div className='basis-2/5'>
            <img src='invertMentorin.png' alt='logo' className='ml-20 w-28'/>
            <p className='text-base mt-5 mx-20 text-gray-100'>Mentorin adalah platform yang menyediakan mentor-mentor yang siap membantu kamu dalam mengembangkan skill dan karir kamu</p>
          </div>
          <div className='basis-1/5 mt-5 pl-14'>
            <p className='text-2xl font-medium'>Company</p>
            <div className='grid justify-items-start gap-3 text-base mt-3'>
              <Button type={'link'} to='/error'>About us</Button>
              <Button type={'link'} to='/error'>Service</Button>
              <Button type={'link'} to='/error'>Program</Button>
              <Button type={'link'} to='/error'>Blog</Button>
            </div>
          </div>
          <div className='basis-1/5 mt-5'>
          <p className='text-2xl font-medium'>Our Contact</p>
            <div className='grid justify-items-start gap-3 text-base mt-3'>
              <p>(+62) 812345678</p>
              <p>mentorin@gmail.com</p>
              <p>Kota Bogor, Jawa Barat, 16155</p>
            </div>
          </div>
          <div className='basis-1/5 mt-5'>
          <p className='text-2xl font-medium'>Publication</p>
            <div className='grid justify-items-start gap-3 text-base mt-3'>
              <Button type={'link'} to='/error'>Facebook</Button>
              <Button type={'link'} to='/error'>Twitter</Button>
              <Button type={'link'} to='/error'>Instagram</Button>
              <Button type={'link'} to='/error'>Tiktok</Button>
            </div>
          </div>
        </div>
    </>
  )
}
