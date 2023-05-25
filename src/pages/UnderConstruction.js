import React from 'react'
import Button from '../components/Button'
import Footer from '../parts/Footer'
import Navbar from '../parts/Navbar'

export default function UnderConstruction() {
  return (
    <>
        <Navbar />
        <div className='flex mt-20'>
            <div className='basis-1/2 grid content-center text-center'>
                <p className='text-gray-500'>404 PAGE NOT FOUND</p>

                <p className='text-4xl font-medium my-5'>Ooops!! Sorry Website is Under Construction</p>
                <Button type={'link'} to='/' isSmall className={'w-fit m-auto'}>Back to Home</Button>
            </div>
            <div className='basis-1/2'>
                <img src='err.png' alt='under-construction' className='w-[500px] mx-auto'/>
            </div>

        </div>
        <Footer />
    </>
  )
}
