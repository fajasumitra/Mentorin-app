import React from 'react'
import MentorCard from '../../components/MentorCard'

export default function KenalanMentor() {
  return (
    <>
        <div className='mt-32'>
                <p className='text-4xl text-center mb-16'>
                    Yuk, Kenalan dengan mentor kami
                </p>
            <div className='flex justify-center gap-8'>
                <MentorCard />
                <MentorCard />
                <MentorCard />
            </div>
        </div>
    </>
  )
}
