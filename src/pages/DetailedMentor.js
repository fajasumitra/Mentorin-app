import React from 'react'
import MentorDesc from '../parts/detailedMentor/MentorDesc'
import ProfileMentor from '../parts/detailedMentor/ProfileMentor'
import Footer from '../parts/Footer'
import Navbar from '../parts/Navbar'

export default function DetailedMentor() {
  return (
    <>
        <Navbar />
        <div className='flex mt-20'>
            <div className='basis-1/2'>
                <ProfileMentor />
            </div>
            <div className='basis-1/2 mt-5'>
                <MentorDesc />
            </div>
        </div>
        <Footer />
    </>
  )
}
