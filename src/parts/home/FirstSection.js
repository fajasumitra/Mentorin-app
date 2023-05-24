import React from 'react'
import Button from '../../components/Button'

export default function FirstSection() {
  return (
    <>
        <div className='flex w-full mt-8'>
            <div className='mt-28'>
                <h5 className='text-lg text-[#696969]'>Mentorin</h5>
                <h1 className='text-4xl font-bold mt-4 mb-10'>Slogan by nevan and rivo</h1>
                <p className='text-[#696969]'>Temukan mentor yang tepat untuk membantu kamu dalam mengembangkan skill dan karir</p>
                <Button type={"link"} to={"/mentor"} isSmall className={'font-bold mt-5'}>Get Started</Button>
            </div>
            <div>
                <img src="FotoHomepage.png" alt="Hero1" className=''/>
            </div>
        </div>
    </>
  )
}
