import React from 'react'
import Button from '../../components/Button'
import MentorCard from '../../components/MentorCard'

export default function KenalanMentor() {
  return (
    <>
        <div className='mt-32 '>
            <div className='text-center'>
                <p className='text-4xl'>
                    Yuk, Kenalan dengan mentor kami
                </p>
                <Button type={"link"} to={"/mentor"} className={'font-bold mt-5'}>Lihat Semua</Button>
            </div>
            <div className='flex justify-center gap-8 mt-10'>
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
            </div>
        </div>
    </>
  )
}
