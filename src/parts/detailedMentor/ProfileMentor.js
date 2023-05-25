import React from 'react'
import Button from '../../components/Button'

export default function ProfileMentor() {
  return (
    <>
        <div className='mx-auto'>
            <img src="profleFoto.png" alt="" className='w-[350px] h-[350px] mx-auto rounded-lg' />
            <div className='rounded-lg w-60 bg-white mx-auto mt-5'>
                <div className='text-center my-2'>
                    <p>Start From <span className='font-bold'> Rp 74,999</span></p>
                </div>

                <Button type='button' className='w-full h-10 bg-[#50A4FE] rounded-b-lg grid content-center text-center text-white font-medium'>
                    Hire Sekarang
                </Button>
            </div>
        </div>
    </>
  )
}
