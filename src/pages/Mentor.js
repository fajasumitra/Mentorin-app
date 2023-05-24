import React from 'react'
import MentorCard from '../components/MentorCard'
import Navbar from '../parts/Navbar'

export default function Mentor() {
  return (
    <>
    <Navbar />
    <div className='px-20'>
      <div className='text-center mt-20'>
        <p className='text-2xl font-medium'>Temukan Mentormu</p>
        <p className='text-[#696969] text-base'>Temukan mentor yang akan mengubah perjalanan hidup Anda dan membantu Anda mencapai potensi terbaik Anda.</p>
      </div>
      <div className='grid grid-cols-4 gap-8 mt-10'>
                {/* <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard /> */}
                
            </div>
    </div>
    </>
  )
}
